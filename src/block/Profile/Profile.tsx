import ProfileForm from "@/components/ProfileForm";
import styles from "./Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.statsGrid}>
                <StatCard title="campagnes créées" value={0} />
                <StatCard title="cartes créées" value={0} />
                <StatCard title="personnages créés" value={0} />
                <StatCard title="ressources créées" value={0} />
            </div>
            <div className={styles.profileFormContainer}>
                <ProfileForm initialData={{}} />
            </div>
        </div>
    );
}

function StatCard({ title, value }: { title: string; value: number }) {
    return (
        <div className={styles.statCard}>
            <div className={styles.statCardContent}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statTitle}>{title}</div>
            </div>
        </div>
    );
}
