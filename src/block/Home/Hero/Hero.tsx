import {Button} from "@/components/ui";
import {aladin} from "@/lib/utils";

import styles from './Hero.module.css';
import Image from "next/image";
import {randomInt} from "node:crypto";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.backgroundWrapper}>
                <Image
                    src={`/images/hero-${randomInt(1, 4)}.png`}
                    alt=""
                    fill
                />
            </div>

            <p className={`${styles.title} ${aladin.className}`}>Projet RPG</p>
            <Button variant="primary" href="/campaigns">Créer une nouvelle campagne</Button>
        </div>
    );
}

export default Hero;
