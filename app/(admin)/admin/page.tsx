import { db } from "@/lib/db";
import Link from "next/link";
import {
    Users,
    Layers,
    Clock,
    TrendingUp,
    ArrowRight
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

            {/* Administrative Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Content Management</h2>
                    <p className="text-slate-500 mb-6">Build and refine your data-driven curriculum.</p>
                    <div className="space-y-3">
                        <Link href="/admin/paths" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                            <span className="font-medium">Career Path Editor</span>
                            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/admin/paths" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                            <span className="font-medium">Module & Skill Manager</span>
                            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Simulation & Testing</h2>
                    <p className="text-slate-500 mb-6">Test user flows by overriding constraints and simulating states.</p>
                    <div className="space-y-3">
                        <Link href="/dashboard" className="flex items-center justify-between p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors group border border-indigo-100 dark:border-indigo-900/50">
                            <div className="flex flex-col">
                                <span className="font-bold text-indigo-600 dark:text-indigo-400">Launch User Dashboard</span>
                                <span className="text-xs text-indigo-500/80">Use Admin Mode toggle to bypass locks</span>
                            </div>
                            <ArrowRight size={18} className="text-indigo-600 dark:text-indigo-400 translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/admin/users" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                            <span className="font-medium">Manage User Roles</span>
                            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
