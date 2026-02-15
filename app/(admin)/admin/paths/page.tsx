import { db } from "@/lib/db";
import {
    Layers,
    Eye,
    EyeOff,
    Plus,
    ArrowRight,
    MoreVertical
} from "lucide-react";

export default async function AdminPathsPage() {
    const paths = await db.careerPath.findMany({
        include: {
            _count: {
                select: { levels: true, enrollments: true }
            }
        },
        orderBy: { title: "asc" }
    });

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Career Paths</h1>
                    <p className="text-slate-500 dark:text-slate-400">Review and publish your learning curriculum.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium">
                    <Plus className="h-4 w-4" />
                    Create New Path
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paths.map((path) => (
                    <div key={path.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
                        <div className="p-6 flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                    {/* Icon placeholder - would normally fetch from path.icon */}
                                    <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${path.isPublished
                                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                    }`}>
                                    {path.isPublished ? "Published" : "Draft"}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{path.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">{path.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{path._count.levels}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-tighter">Levels</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{path._count.enrollments}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-tighter">Students</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                {path.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                {path.isPublished ? "Unpublish" : "Publish Now"}
                            </button>
                            <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <MoreVertical className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {paths.length === 0 && (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                    <Layers className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Paths Found</h3>
                    <p className="text-slate-500">Time to create your first learning curriculum.</p>
                </div>
            )}
        </div>
    );
}
