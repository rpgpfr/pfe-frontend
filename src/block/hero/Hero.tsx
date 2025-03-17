import styles from '@/block/hero/Hero.module.css';
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <header className={styles.header}>
                <p className={styles.header_title}>Projet RPG</p>
                    <Button variant="primary">Créer une nouvelle campagne</Button>
            </header>
        </div>
    );
}

export default Hero;
