"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { isSuperAdmin } from "@/lib/permissions";

interface AdminContextType {
    adminMode: boolean;
    setAdminMode: (mode: boolean) => void;
    toggleAdminMode: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: session } = useSession();
    const [adminMode, setAdminMode] = useState<boolean>(false);

    // Persist admin mode in localStorage and cookies for server-side
    useEffect(() => {
        const savedMode = localStorage.getItem("admin-simulation-mode");
        if (savedMode === "true" && isSuperAdmin(session?.user)) {
            setAdminMode(true);
        }
    }, [session]);

    const handleSetAdminMode = (mode: boolean) => {
        if (!isSuperAdmin(session?.user)) return;
        setAdminMode(mode);
        localStorage.setItem("admin-simulation-mode", mode.toString());
        // Set cookie so server-side can read it
        document.cookie = `admin-simulation-mode=${mode}; path=/; max-age=31536000; SameSite=Lax`;
    };

    const toggleAdminMode = () => {
        handleSetAdminMode(!adminMode);
    };

    return (
        <AdminContext.Provider value={{ adminMode, setAdminMode: handleSetAdminMode, toggleAdminMode }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
};
