import { ChevronRight } from "lucide-react";
import styles from "./LastActivities.module.css";

interface Activite {
    titre: string;
    date: string;
}

interface DernieresActivitesProps {
    activites: Activite[];
}

export default function DernieresActivites({ activites = [] }: DernieresActivitesProps) {
    const activitesAffichees =
        activites.length > 0
            ? activites
            : [
                  { titre: "Intitulé de l'activité", date: "22/07/2000" },
                  { titre: "Intitulé de l'activité", date: "22/07/2000" },
                  { titre: "Intitulé de l'activité", date: "22/07/2000" },
                  { titre: "Intitulé de l'activité", date: "22/07/2000" },
              ];

    return (
        <div className={styles.activitiesContainer}>
            <h2 className={styles.activitiesHeader}>Dernières activités</h2>
            <ul className={styles.activitiesList}>
                {activitesAffichees.map((activite, index) => (
                    <li key={index} className={styles.activityItem}>
                        <div className={styles.activityDetails}>
                            <span className={styles.activityBullet}>•</span>
                            <span className={styles.activityTitle}>{activite.titre}</span>
                        </div>
                        <div className={styles.activityMeta}>
                            <span className={styles.activityDate}>{activite.date}</span>
                            <ChevronRight className={styles.activityIcon} size={18} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

