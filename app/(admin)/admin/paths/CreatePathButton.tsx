"use client";

import { Plus } from "lucide-react";
import styles from "./page.module.css";

export function CreatePathButton() {
    const handleClick = () => {
        alert("Create Path functionality is coming soon! For now, please use the seed script to add new paths.");
    };

    return (
        <button className={styles.createBtn} onClick={handleClick}>
            <Plus size={16} />
            Create New Path
        </button>
    );
}
