import styles from '@/block/presentation/Presentation.module.css';
import { Aladin } from 'next/font/google';

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});

const Presentation = () => {
    return (
        <div className={styles.presentation}>
            <p>
                <span className={`${styles.text_presentation} ${aladin.variable} ${aladin.className}`}>Projet RPG</span>
                <span> est un outil qui vous permet de créer toutes les ressources nécessaires à la création d’un univers de jeu de rôle. Avec son interface intuitive, la création d’un JDR n’a jamais été aussi simple !</span>
            </p>
        </div>
    );
}

export default Presentation;
