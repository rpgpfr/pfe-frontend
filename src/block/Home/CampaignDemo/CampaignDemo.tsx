import Image from "next/image";

import {aladin} from "@/lib/utils";

import styles from './CampaignDemo.module.css';

const CampaignDemo = () => {
    return (
        <section className={styles.section}>
            <h1 className={`${styles.title} ${aladin.className}`}>Créez votre campagne</h1>

            <div className={styles.sectionGrid}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Image de campagne"
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <p><span>Plongez dans l&apos;aventure</span> en commençant par créer votre propre campagne :</p>

                    <ul>
                        <li>
                            <span>Définissez </span> l&apos;histoire de votre campagne
                        </li>
                        <li>
                            <span>Choisissez </span>le type et l&apos;ambiance du monde
                        </li>
                        <li>
                            <span>Écrivez </span> la quête principale de la campagne ou choisissez en une parmi notre
                            sélection
                        </li>
                        <li>
                            <span>Attribuez </span> une carte et des personnages et le tour est joué !
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default CampaignDemo;
