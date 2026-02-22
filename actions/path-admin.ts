"use server";

import { db } from "@/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function checkAdmin() {
    const session = await auth();
    const role = session?.user?.role;
    if (role !== "ADMIN" && role !== "SUPER_ADMIN") {
        throw new Error("Unauthorized: Admin access required");
    }
}

export async function togglePathPublishStatus(pathId: string, isPublished: boolean) {
    await checkAdmin();

    try {
        await db.careerPath.update({
            where: { id: pathId },
            data: { isPublished: !isPublished },
        });
        revalidatePath("/admin/paths");
        revalidatePath("/paths");
        return { success: `Path ${isPublished ? "unpublished" : "published"} successfully` };
    } catch (error) {
        return { error: "Failed to update path status" };
    }
}

export async function deletePath(pathId: string) {
    await checkAdmin();

    try {
        await db.careerPath.delete({
            where: { id: pathId },
        });
        revalidatePath("/admin/paths");
        revalidatePath("/paths");
        return { success: "Path deleted successfully" };
    } catch (error) {
        return { error: "Failed to delete path" };
    }
}
