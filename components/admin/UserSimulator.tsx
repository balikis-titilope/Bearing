"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ShieldAlert, Zap, RefreshCcw, Unlock, User as UserIcon } from 'lucide-react';

interface UserSimulatorProps {
    users: any[];
    careerPaths: any[];
}

export const UserSimulator: React.FC<UserSimulatorProps> = ({ users, careerPaths }) => {
    const [selectedUserId, setSelectedUserId] = useState('');
    const [loading, setLoading] = useState(false);

    const selectedUser = users.find(u => u.id === selectedUserId);

    const handleAction = async (action: string, data?: any) => {
        if (!selectedUserId) return;
        setLoading(true);
        try {
            await fetch('/api/admin/simulate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: selectedUserId, action, ...data })
            });
            // Normally we'd refresh or update local state
            window.location.reload();
        } catch (error) {
            console.error('Simulation failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <label className="block text-sm font-medium mb-2">Select User to Simulate</label>
                <select
                    value={selectedUserId}
                    onChange={(e) => setSelectedUserId(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                    <option value="">-- Choose a user --</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name || user.email} ({user.role})
                        </option>
                    ))}
                </select>
            </Card>

            {selectedUser && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <Zap className="text-yellow-500" />
                            <h3 className="font-bold">Progress Simulation</h3>
                        </div>
                        <p className="text-sm text-slate-500">Fast-forward user progress or reset state.</p>

                        <div className="space-y-2">
                            <Button
                                onClick={() => handleAction('simulate-ready')}
                                className="w-full justify-start gap-2"
                                variant="outline"
                                disabled={loading}
                            >
                                <Zap size={16} /> Force 80% Readiness
                            </Button>
                            <Button
                                onClick={() => handleAction('reset-progress')}
                                className="w-full justify-start gap-2 text-red-500"
                                variant="outline"
                                disabled={loading}
                            >
                                <RefreshCcw size={16} /> Reset All Progress
                            </Button>
                        </div>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <Unlock className="text-green-500" />
                            <h3 className="font-bold">Constraint Overrides</h3>
                        </div>
                        <p className="text-sm text-slate-500">Bypass dependency locks and rules.</p>

                        <div className="space-y-2">
                            <Button
                                onClick={() => handleAction('unlock-all-levels')}
                                className="w-full justify-start gap-2"
                                variant="outline"
                                disabled={loading}
                            >
                                <Unlock size={16} /> Unlock All Levels
                            </Button>
                            <Button
                                onClick={() => handleAction('mark-completed')}
                                className="w-full justify-start gap-2"
                                variant="outline"
                                disabled={loading}
                            >
                                <ShieldAlert size={16} /> Auto-Validate Projects
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};
