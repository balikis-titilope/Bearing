"use server";

import { db } from "@/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { UserRole } from "@prisma/client";

async function checkSuperAdmin() {
    const session = await auth();
    if (session?.user?.role !== "SUPER_ADMIN") {
        throw new Error("Unauthorized: Super Admin access required");
    }
}

export async function updateUserRole(userId: string, newRole: UserRole) {
    await checkSuperAdmin();

    try {
        await db.user.update({
            where: { id: userId },
            data: { role: newRole },
        });
        revalidatePath("/admin/users");
        return { success: "User role updated successfully" };
    } catch (error) {
        return { error: "Failed to update user role" };
    }
}

export async function deleteUser(userId: string) {
    await checkSuperAdmin();

    try {
        await db.user.delete({
            where: { id: userId },
        });
        revalidatePath("/admin/users");
        return { success: "User deleted successfully" };
    } catch (error) {
        return { error: "Failed to delete user" };
    }
}
export async function promoteToAdminByEmail(email: string) {
    await checkSuperAdmin();

    try {
        const user = await db.user.findUnique({
            where: { email },
        });

        if (!user) {
            return { error: "User with this email not found" };
        }

        if (user.role === "SUPER_ADMIN") {
            return { error: "User is already a Super Admin" };
        }

        await db.user.update({
            where: { id: user.id },
            data: { role: UserRole.ADMIN },
        });

        revalidatePath("/admin/users");
        return { success: `User ${email} promoted to Admin successfully` };
    } catch (error) {
        return { error: "Failed to promote user" };
    }
}
