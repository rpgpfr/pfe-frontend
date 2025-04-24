import {ReactNode} from "react";
import Image from "next/image";

import styles from "./HomeCard.module.css";

interface HomeCardProps {
    imageSrc: string;
    imageAlt: string;
    children?: ReactNode;
}

const HomeCard = ({imageSrc, imageAlt, children}: HomeCardProps) => {

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                />
            </div>
            <div className={styles.cardOverlay}>
                {children}
            </div>
        </div>
    );

};

export default HomeCard;