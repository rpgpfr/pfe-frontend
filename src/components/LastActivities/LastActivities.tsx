import { ChevronRight } from "lucide-react";
import styles from "./LastActivities.module.css";
import {aladin} from "@/lib/utils";

interface Activity {
    title: string;
    date: string;
}

interface LastActivitiesProps {
    activities: Activity[];
}

export default function LastActivities({ activities = [] }: LastActivitiesProps) {
    const showedActivities: Activity[] =
        activities.length > 0
            ? activities
            : [
                  { title: "Intitulé de l'activité", date: "22/07/2000" },
                  { title: "Intitulé de l'activité", date: "22/07/2000" },
                  { title: "Intitulé de l'activité", date: "22/07/2000" },
                  { title: "Intitulé de l'activité", date: "22/07/2000" },
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
                            <ChevronRight className={styles.activityIcon} size={18} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

