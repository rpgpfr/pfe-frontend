import {aladin} from "@/lib/utils";
import {HomeCard} from "@/components";

import styles from './WorldDemo.module.css';

const WorldDemo = () => {
    return (
        <section className={styles.section}>
            <h1 className={`${styles.title} ${aladin.className}`}>Construisez votre monde</h1>

            <div className={styles.sectionGrid}>
                <HomeCard imageSrc="/placeholder.svg" imageAlt="Création de personnage">
                    <p className={styles.content}>
                        Créez vos personnages : Personnalisez son histoire, apparence et ses caractéristiques !
                    </p>
                </HomeCard>

                <HomeCard imageSrc="/placeholder.svg" imageAlt="Carte du monde">
                    <p className={styles.content}>
                        Personnalisez la carte du monde : Importez votre carte ou choisissez parmi une sélection par
                        défaut et ajoutez des marqueurs !
                    </p>
                </HomeCard>
            </div>
        </section>
    );
};

export default WorldDemo;