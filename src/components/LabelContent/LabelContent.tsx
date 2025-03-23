import type React from "react"
import { cn } from "@/lib/utils"
import styles from "./LabelContent.module.css"

interface LabelContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    label: string
    content: React.ReactNode
    labelClassName?: string
    contentClassName?: string
}

export function LabelContent({
                                 label,
                                 content,
                                 className,
                                 labelClassName,
                                 contentClassName,
                                 ...props
                             }: LabelContentProps) {

    return (
        <div className={cn(styles.container, className)} {...props}>
            <span className={cn(styles.label, labelClassName)}>{label}</span>
            <span className={cn(styles.content, contentClassName)}>{content}</span>
        </div>
    )
}

