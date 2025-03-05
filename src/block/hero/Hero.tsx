import Link from 'next/link';
import styles from '@/block/hero/Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.links}>Créer une nouvelle campagne</Link>
                </nav>
            </header>
        </div>
    );
}

export default Hero;
