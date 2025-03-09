import Link from 'next/link';
import styles from '@/block/hero/Hero.module.css';
import { Aladin } from 'next/font/google';

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});

const Hero = () => {
    return (
        <div className={styles.hero}>
            <header className={styles.header}>
                <p className={`${styles.header_title} ${aladin.variable} ${aladin.className}`}>Projet RPG</p>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.links}>Créer une nouvelle campagne</Link>
                </nav>
            </header>
        </div>
    );
}

export default Hero;
