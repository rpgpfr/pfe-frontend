import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import styles from "./ImageContentCard.module.css"

interface ImageContentCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    imageSrc: string
    imageAlt?: string
    imageSize?: number
    content: React.ReactNode
    contentClassName?: string
    imageClassName?: string
}

export function ImageContentCard({
                                     imageSrc,
                                     imageAlt = "Image",
                                     imageSize = 80,
                                     content,
                                     className,
                                     contentClassName,
                                     imageClassName,
                                     ...props
                                 }: ImageContentCardProps) {
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

