import { db } from "@/lib/db";
import { auth } from "@/auth";
import { isSuperAdmin } from "@/lib/permissions";
import { notFound } from "next/navigation";
import { UserSimulator } from "@/components/admin/UserSimulator";

export default async function AdminSimulationPage() {
    const session = await auth();

    if (!isSuperAdmin(session?.user)) {
        return notFound();
    }

    const users = await db.user.findMany({
        take: 20,
        orderBy: { lastActivityAt: "desc" },
        include: {
            enrollments: {
                include: {
                    careerPath: true
                }
            }
        }
    });

    const careerPaths = await db.careerPath.findMany();

    return (
        <div className="max-w-4xl mx-auto space-y-8 p-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">User State Simulation</h1>
                <p className="text-slate-500 dark:text-slate-400">Force progress, unlock modules, and test circular dependencies.</p>
            </div>

            <UserSimulator users={users} careerPaths={careerPaths} />
        </div>
    );
}
