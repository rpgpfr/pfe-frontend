import {aladin} from "@/lib/utils";

import styles from './Presentation.module.css';

const Presentation = () => {

    return (
        <div className={styles.presentation}>
            <p>
                <span className={`${styles.title} ${aladin.className}`}>RPGine</span>
                <span> est un outil qui vous permet de créer toutes les ressources nécessaires à la création d’un univers de jeu de rôle. Avec son interface intuitive, la création d’un JDR n’a jamais été aussi simple !</span>
            </p>
        </div>
    );

}

export default Presentation;
