
import Link from 'next/link';

import styles from '@/app/components/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.Titre}>
            <Link href="#accueil" className={styles.accueil}>
                    PROJECT RPG
                </Link>           
            </div>
            <nav className={styles.nav}>
                <Link href="#seconnecter" className={styles.link}>
                    Se Connecter
                </Link>
                <Link href="#sinscrire" className={styles["btn-primary"]}>
                    S'inscrire
                </Link>
            </nav>
        </header>
    );
}

export default Header;
