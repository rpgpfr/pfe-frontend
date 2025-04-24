"use client";

import Image from "next/image";
import {Eye, Plus} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui";

import styles from "./ImageActionCard.module.css";
import {FC, HTMLAttributes} from "react";

interface ImageActionCardProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string
    imageAlt?: string
    imageSize?: number
    onView?: () => void
    onAdd?: () => void
    imageClassName?: string
    viewButtonClassName?: string
    addButtonClassName?: string
}

const ImageActionCard: FC<ImageActionCardProps> = ({
                                                       imageSrc,
                                                       imageAlt = "Image",
                                                       imageSize = 80,
                                                       className,
                                                       imageClassName,
                                                       ...props
                                                   }) => {
    return (
        <div className={cn(styles.container, className)} {...props}>
            <div className={cn(styles.image, imageClassName)}>
                <Image
                    src={imageSrc || "/placeholder.svg?height=80&width=80"}
                    alt={imageAlt}
                    width={imageSize}
                    height={imageSize}
                    className="rounded"
                />
            </div>
            <div className={styles.actions}>
                <Button variant={'outline'} className={'p-[18px]'}>
                    <Eye className="h-5 w-5 text-[#86ac87]"/>
                </Button>
                <Button variant={'primary'} className={'p-[18px]'}>
                    <Plus className="h-5 w-5"/>
                </Button>
            </div>
        </div>
    )
}

export default ImageActionCard;