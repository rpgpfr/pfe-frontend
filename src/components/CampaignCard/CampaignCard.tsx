"use client"

import Image from "next/image"
import { Trash2, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import styles from "./CampaignCard.module.css"

interface CampaignCardProps {
    name: string
    image: string
    createdAt: Date
    className?: string
    showDate?: boolean
}

export default function CampaignCard({
                                         name,
                                         image,
                                         createdAt,
                                         className = "",
                                         showDate = true,
                                     }: CampaignCardProps) {
    // Formater la date pour l'affichage
    const formatDate = (date: Date) => {
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
    }

    return (
        <div className={`${styles.card} ${className}`}>
            <h3 className={styles.title}>{name}</h3>
            {showDate && <p className={styles.date}>Créée le {formatDate(createdAt)}</p>}
            <div className={styles.imageContainer}>
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-[4px]" />
            </div>
            <div className={styles.actions}>
                <Button variant="secondary" className={styles.buttonSecondary}>
                    <Trash2 className={styles.icon} />
                </Button>
                <Button variant="primary" className={styles.buttonPrimary}>
                    <ArrowRight className={styles.icon} />
                </Button>
            </div>
        </div>
    )
}