import Image from "next/image";
import {ArrowRight, Trash2} from "lucide-react";

import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";

import styles from "./CampaignCard.module.css";

interface CampaignCardProps {
    id: number,
    name: string;
    image: string;
    createdAt: Date;
    className?: string;
    showDate?: boolean;
}

export const CampaignCard = ({id, name, image, createdAt, className, showDate}: CampaignCardProps) => {

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div id={`campaign-${id}`} className={cn(styles.card, className)}>
            <h3 className={styles.title}>{name}</h3>

            {
                showDate &&
                <p className={styles.date}>Créée le {formatDate(createdAt)}</p>
            }

            <div className={styles.imageContainer}>
                <Image src={image || "/placeholder.svg"} alt={name} fill/>
            </div>

            <div className={styles.action}>
                <Button variant="secondary" className={styles.button}>
                    <Trash2 className={styles.icon}/>
                </Button>

                <Button variant="primary" className={styles.button}>
                    <ArrowRight className={styles.icon}/>
                </Button>
            </div>
        </div>
    );

};

export default CampaignCard;