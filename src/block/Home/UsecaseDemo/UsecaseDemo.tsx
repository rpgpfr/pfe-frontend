
import {aladin} from "@/lib/utils";
import HomeCard from "@/components/HomeCard/HomeCard";

import styles from './UsecaseDemo.module.css';

const UsecaseDemo = () => {

    return (
        <section className={styles.section}>
            <h1 className={`${styles.title} ${aladin.className}`}>Simple d&apos;utilisation</h1>

            <div className={styles.sectionGrid}>
                <HomeCard imageSrc="/image1.jpg" imageAlt="Image 1">
                    <p className={styles.content}>
                        Retrouvez des aides tout au long de la création !
                    </p>
                </HomeCard>

                <HomeCard imageSrc="/image1.jpg" imageAlt="Image 1">
                    <p className={styles.content}>
                        Profitez d’une interface intuitive et facile à utiliser !
                    </p>
                </HomeCard>

                <HomeCard imageSrc="/image1.jpg" imageAlt="Image 1">
                    <p className={styles.content}>
                        Vous avez un doute sur la signification d’un terme ? Le glossaire est là pour vous !
                    </p>
                </HomeCard>
            </div>
        </section>
    );

};

export default UsecaseDemo;