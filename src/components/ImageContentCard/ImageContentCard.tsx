"use client";

import Image from "next/image";

import {cn} from "@/lib/utils";

import styles from "./ImageContentCard.module.css";

interface ImageContentCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
    imageSrc: string
    imageAlt?: string
    imageSize?: number
    content: ReactNode
    contentClassName?: string
    imageClassName?: string
}

const ImageContentCard: FC<ImageContentCardProps> = ({
                                                         imageSrc,
                                                         imageAlt = "Image",
                                                         imageSize = 80,
                                                         content,
                                                         className,
                                                         contentClassName,
                                                         imageClassName,
                                                         ...props
                                                     }) => {
    return (
        <div className={cn(styles.container, className)} {...props}>
            <div className={cn(styles.image, imageClassName)}>
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={imageAlt}
                    width={imageSize}
                    height={imageSize}
                    className="rounded"
                />
            </div>
            <span className={cn(styles.content, contentClassName)}>{content}</span>
        </div>
    )
}

export default ImageContentCard;