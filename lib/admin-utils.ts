import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export async function currentRole() {
    const session = await auth();
    return session?.user?.role;
}

export async function isAdmin() {
    const role = await currentRole();
    return role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN;
}

export async function isSuperAdmin() {
    const role = await currentRole();
    return role === UserRole.SUPER_ADMIN;
}

export async function protectAdmin() {
    const admin = await isAdmin();
    if (!admin) {
        throw new Error("Unauthorized: Admin access required");
    }
}

export async function protectSuperAdmin() {
    const superAdmin = await isSuperAdmin();
    if (!superAdmin) {
        throw new Error("Unauthorized: Super Admin access required");
    }
}
