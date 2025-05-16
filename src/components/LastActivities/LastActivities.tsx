import {ChevronRight} from "lucide-react";

import {aladin} from "@/lib/utils";

import styles from "./LastActivities.module.css";

interface Activity {
    title: string;
    date: string;
}

interface LastActivitiesProps {
    activities: Activity[];
}

export default function LastActivities({activities = []}: LastActivitiesProps) {
    const showedActivities: Activity[] =
        activities.length > 0
            ? activities
            : [
                {title: "Création de la campagne 'Les Terres Oubliées'", date: "15/05/2025"},
                {title: "Ajout du personnage Thalia, Elfe Druide niveau 3", date: "14/05/2025"},
                {title: "Session #2 de 'La Crypte des Ombres'", date: "12/05/2025"},
                {title: "Édition de la fiche de Grommash, Demi-Orc Barbare", date: "10/05/2025"},
                {title: "Création de la quête 'Le Trésor du Roi Nain'", date: "08/05/2025"},
                {title: "Session #1 de 'La Crypte des Ombres'", date: "05/05/2025"},
                {title: "Ajout du personnage Grommash, Demi-Orc Barbare niveau 2", date: "03/05/2025"},
                {title: "Création de la campagne 'La Crypte des Ombres'", date: "01/05/2025"},
            ];
    return (
        <div className={styles.activitiesContainer}>
            <h2 className={`${styles.activitiesHeader} ${aladin.className}`}>Dernières activités</h2>
            <ul className={styles.activitiesList}>
                {showedActivities.map((activity, index) => (
                    <li key={index} className={styles.activityItem}>
                        <div className={styles.activityDetails}>
                            <span className={styles.activityBullet}>•</span>
                            <span className={styles.activityTitle}>{activity.title}</span>
                        </div>
                        <div className={styles.activityMeta}>
                            <span className={styles.activityDate}>{activity.date}</span>
                            <ChevronRight className={styles.activityIcon} size={18}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

