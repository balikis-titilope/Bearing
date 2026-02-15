import { db } from "@/lib/db";
import {
    Users,
    Layers,
    Clock,
    TrendingUp
} from "lucide-react";

export default async function AdminDashboardPage() {
    const userCount = await db.user.count();
    const pathCount = await db.careerPath.count();
    const enrollmentCount = await db.enrollment.count();

    const stats = [
        { label: "Total Users", value: userCount, icon: Users, color: "text-blue-600" },
        { label: "Active Paths", value: pathCount, icon: Layers, color: "text-purple-600" },
        { label: "Enrollments", value: enrollmentCount, icon: Clock, color: "text-orange-600" },
        { label: "Completion Rate", value: "68%", icon: TrendingUp, color: "text-green-600" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Overview</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your system and monitor growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium text-slate-400">Last 30 days</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Placeholder for more detailed stats/charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px]">
                    <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Recent Activity</h2>
                    <div className="space-y-4">
                        <p className="text-slate-400 text-sm italic">User activity feed integration coming soon...</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px]">
                    <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Content Performance</h2>
                    <div className="space-y-4">
                        <p className="text-slate-400 text-sm italic">Path engagement metrics integration coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
