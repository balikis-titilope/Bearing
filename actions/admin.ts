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
