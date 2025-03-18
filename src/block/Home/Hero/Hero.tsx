import Button from '@/components/ui/Button';

import {aladin} from "@/lib/utils";

import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <p className={`${styles.title} ${aladin.className}`}>Projet RPG</p>
            <Button variant="primary">Créer une nouvelle campagne</Button>
        </div>
    );
}

export default Hero;
