"use client";

import {FC, ReactNode, useEffect, useRef} from "react"
import {X} from "lucide-react"

import {aladin} from "@/lib/utils";

import styles from "./Drawer.module.css"

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Drawer: FC<DrawerProps> = ({isOpen, onClose, title, children}) => {

    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer} ref={drawerRef}>
                <div className={styles.header}>
                    <h2 className={`${styles.title} ${aladin.className}`}>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">
                        <X className="w-5 h-5"/>
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    )
}

export default Drawer;