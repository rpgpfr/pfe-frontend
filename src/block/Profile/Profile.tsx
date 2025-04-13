import {ProfileForm} from "@/components";
import styles from "./Profile.module.css";
import {UserProfile} from "api";

interface ProfileProps {
    profile: UserProfile
}

export default function Profile({profile}: ProfileProps) {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.statsGrid}>
                <StatCard title="campagnes créées" value={profile.campaignCount}/>
                <StatCard title="cartes créées" value={profile.mapCount}/>
                <StatCard title="personnages créés" value={profile.characterCount}/>
                <StatCard title="ressources créées" value={profile.resourceCount}/>
            </div>
            <div className={styles.profileFormContainer}>
                <ProfileForm profile={profile}/>
            </div>
        </div>
    );
}

function StatCard({title, value}: { title: string; value: number }) {
    return (
        <div className={styles.statCard}>
            <div className={styles.statCardContent}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statTitle}>{title}</div>
            </div>
        </div>
    );
}
