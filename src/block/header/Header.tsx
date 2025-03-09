import Link from 'next/link';
import { Aladin } from 'next/font/google';
import styles from '@/block/header/Header.module.css';

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.Titre}>
        <Link 
          href="/" 
          className={`${styles.title} ${aladin.variable} ${aladin.className}`}
        >
          PROJECT RPG
        </Link>             
      </div>
      <nav className={styles.nav}>
        <Link href="/login" className={styles.link}>
          Se Connecter
        </Link>
        <Link href="/register" className={styles.btnPrimary}>
          S'inscrire
        </Link>
      </nav>
    </header>
  );
};

export default Header;