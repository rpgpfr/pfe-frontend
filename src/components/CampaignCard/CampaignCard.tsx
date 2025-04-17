import Image from "next/image";
import {ArrowRight, Trash2} from "lucide-react";

import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";

import styles from "./CampaignCard.module.css";
import {Campaign} from "api";

interface CampaignCardProps {
    campaign: Campaign
    showDate?: boolean
    className?: string
}

export const CampaignCard = ({campaign, className, showDate = false}: CampaignCardProps) => {

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div id={campaign.slug} className={cn(styles.card, className)}>
            <h3 className={styles.title}>{campaign.name}</h3>

            {
                showDate &&
                <p className={styles.date}>Créée le {formatDate(campaign.createdAt)}</p>
            }

            <div className={styles.imageContainer}>
                <Image src={"/placeholder.svg"} alt={campaign.name} fill/>
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
