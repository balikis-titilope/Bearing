import { cookies } from "next/headers";

/**
 * Server-side helper to get the admin simulation mode from cookies.
 * This MUST only be called in Server Components, Actions, or Route Handlers.
 */
export async function getAdminMode(): Promise<boolean> {
    const cookieStore = await cookies();
    return cookieStore.get("admin-simulation-mode")?.value === "true";
}
