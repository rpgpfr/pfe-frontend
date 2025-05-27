import styles from './ComingSoon.module.css';
import FlagIcon from '/public/images/icons/flag.svg';
import Image from "next/image";
const ComingSoon = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Coming Soon</h2>
            <Image className={styles.image} src={FlagIcon} alt="Icone de drapeau" width={20} height={20}/>
            <p className={styles.text}>Cette fonctionnalité est en cours de développement.</p>
        </div>
    );
};

export default ComingSoon;