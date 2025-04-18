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
        return new Date(date).toLocaleDateString("fr-FR", {
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
                <Button variant="secondary" className="aspect-square p-2">
                    <Trash2 height={24} width={24}/>
                </Button>

                <Button variant="primary" className="aspect-square p-2">
                    <ArrowRight  height={24} width={24}/>
                </Button>
            </div>
        </div>
    );

};

export default CampaignCard;
