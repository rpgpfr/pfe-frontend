import styles from '@/block/footer/Footer.module.css';
import { Aladin } from 'next/font/google';

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerlist}>
                <ul>
                    <li>Accueil</li>
                    <li>Se connecter</li>
                    <li>S&apos;inscrire</li>
                </ul>
            </div>
            <div className={styles.content}>
                <p className={`${styles.footertitle} ${aladin.variable} ${aladin.className}`}>PROJECT RPG</p>
            </div>
            <div className={styles.content}>
                <p>pfe@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;