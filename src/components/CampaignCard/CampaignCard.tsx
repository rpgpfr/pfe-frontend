"use client";

import Image from "next/image";
import {ArrowRight, Trash2} from "lucide-react";

import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";

import styles from "./CampaignCard.module.css";

interface CampaignCardProps {
    id: number;
    name: string;
    image: string;
    createdAt: Date;
    className?: string;
    showDate?: boolean;
}

export const CampaignCard = (props: CampaignCardProps) => {

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div className={cn(styles.card, props.className)}>
            <h3 className={styles.title}>{props.name}</h3>

            {
                props.showDate &&
                <p className={styles.date}>Créée le {formatDate(props.createdAt)}</p>
            }

            <div className={styles.imageContainer}>
                <Image src={props.image || "/placeholder.svg"} alt={props.name} fill/>
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