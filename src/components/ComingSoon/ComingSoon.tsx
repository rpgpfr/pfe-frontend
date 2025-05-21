import styles from './ComingSoon.module.css';
const ComingSoon = () => {
    return (
        <div className={styles.comingSoon}>
            <h2 className={styles.title}>Coming Soon</h2>
            <p className={styles.text}>Cette fonctionnalité est en cours de développement.</p>
        </div>
    );
};

export default ComingSoon;