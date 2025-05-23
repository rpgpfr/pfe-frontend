"use client";

import {FC, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {ChevronsLeft, ChevronsRight} from "lucide-react";

import DashboardIcon from "/public/images/icons/dashboard.svg";
import CharacterIcon from "/public/images/icons/character.svg";
import CastleIcon from "/public/images/icons/castle.svg";

import styles from "./Sidebar.module.css";
import {usePathname} from "next/navigation";

interface SidebarProps {
    activePage?: "campaigns" | "character" | "map"
}

const Sidebar: FC<SidebarProps> = ({activePage}) => {

    const slug = usePathname().split("/")[2];

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleSidebar = (): void => {
        setIsExpanded(!isExpanded)
    };

    return (
        <div
            className={styles.sidebar}
            data-open={isExpanded ? "true" : "false"}
        >
            <button
                className={styles.toggleButton}
                onClick={toggleSidebar}
                aria-label={isExpanded ? "Réduire le menu" : "Développer le menu"}
            >
                <div className={styles.toggleContent}>
                    {isExpanded ? (
                        <ChevronsLeft className={styles.chevronIcon}/>
                    ) : (
                        <ChevronsRight className={styles.chevronIcon}/>
                    )}
                </div>
            </button>

            <nav className={styles.navigation}>
                <Link
                    href={`/campaigns/${slug}`}
                    className={styles.navItem}
                >
                    <div className={styles.iconContainer}>
                        <Image src={DashboardIcon} alt="Tableau de bord" width={20} height={20}/>
                    </div>
                    <span className={`${styles.navLabel} ${activePage === "campaigns" ? styles.navItemActive : ""}`}>Tableau de bord</span>
                </Link>

                <Link
                    href={`/campaigns/${slug}/characters`}
                    className={styles.navItem}
                >
                    <div className={styles.iconContainer}>
                        <Image src={CharacterIcon} alt="Personnage" width={20} height={20}/>
                    </div>
                    <span className={`${styles.navLabel} ${activePage === "character" ? styles.navItemActive : ""}`}>Éditeur de personnages</span>
                </Link>

                <Link
                    href={`/campaigns/${slug}/maps`}
                    className={styles.navItem}
                >
                    <div className={styles.iconContainer}>
                        <Image src={CastleIcon} alt="Carte" width={20} height={20}/>
                    </div>
                    <span className={`${styles.navLabel} ${activePage === "map" ? styles.navItemActive : ""}`}>Éditeur de carte</span>
                </Link>
            </nav>
        </div>
    );

};

export default Sidebar;