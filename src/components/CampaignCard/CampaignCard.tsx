"use client";

import Image from "next/image";
import {ArrowRight, Trash2} from "lucide-react";
import {redirect, useRouter} from "next/navigation";

import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";
import {Campaign} from "api";

import styles from "./CampaignCard.module.css";

interface CampaignCardProps {
    campaign: Campaign
    showDate?: boolean
    className?: string
}

export const CampaignCard = ({campaign, className, showDate = false}: CampaignCardProps) => {

    const router = useRouter();

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const handleDelete = async () => {
        try {
            const options: RequestInit = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };

            const response = await fetch(`/api/campaigns/${campaign.slug}`, options);

            if (response.ok) {
                router.refresh();
            } else {
                redirect("/error");
            }
        } catch (error) {
            console.error(error);

            redirect("/error");
        }
    }

    const cardClassNames = cn(styles.card, "border rounded-default p-2 bg-white w-full h-full", className);

    return (
        <div id={campaign.slug} className={cardClassNames}>
            <h3 className={styles.title}>{campaign.name}</h3>

            {
                showDate &&
                <p className={styles.date}>Créée le {formatDate(campaign.createdAt)}</p>
            }

            <div className={styles.imageContainer}>
                <Image src={"/placeholder.svg"} alt={campaign.name} fill/>
            </div>

            <div className={styles.action}>
                <Button variant="secondary" className="aspect-square p-2" onClick={handleDelete}>
                    <Trash2 height={24} width={24}/>
                </Button>

                <Button href={`/campaigns/${campaign.slug}`} variant="primary" className="aspect-square p-2">
                    <ArrowRight  height={24} width={24}/>
                </Button>
            </div>
        </div>
    );

};

export default CampaignCard;
