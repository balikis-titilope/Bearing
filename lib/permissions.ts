import { UserRole } from "@prisma/client";

/**
 * Sync helper to check if a user is a Super Admin.
 * Safe to use on both Client and Server as long as user object is provided.
 */
export function isSuperAdmin(user?: { role?: string | UserRole } | null): boolean {
    return user?.role === UserRole.SUPER_ADMIN || user?.role === "SUPER_ADMIN";
}

/**
 * Sync helper to check if a user has Admin privileges (either ADMIN or SUPER_ADMIN).
 */
export function isAdmin(user?: { role?: string | UserRole } | null): boolean {
    return (
        user?.role === UserRole.ADMIN ||
        user?.role === UserRole.SUPER_ADMIN ||
        user?.role === "ADMIN" ||
        user?.role === "SUPER_ADMIN"
    );
}

/**
 * Global guard logic: bypass checks if user is Super Admin and Admin Mode is enabled.
 * @param unlocked Current status of the resource
 * @param user Current user object
 * @param adminMode Whether Admin Simulation Mode is ON
 */
export function canAccess(unlocked: boolean, user?: { role?: string | UserRole } | null, adminMode: boolean = false): boolean {
    if (isSuperAdmin(user) && adminMode) {
        return true;
    }
    return unlocked;
}
