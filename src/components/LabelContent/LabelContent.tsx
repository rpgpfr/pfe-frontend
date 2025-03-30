import type React from "react"
import { cn } from "@/lib/utils"
import styles from "./LabelContent.module.css"

interface LabelContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
    label: string
    content: React.ReactNode
    labelClassName?: string
    contentClassName?: string
}

const LabelContent: React.FC<LabelContentProps> = ({
                                                       label,
                                                       content,
                                                       className,
                                                       labelClassName,
                                                       contentClassName,
                                                       ...props
                                                   }) => {
    return (
        <div className={cn(styles.container, className)} {...props}>
            <span className={cn(styles.label, labelClassName)}>{label}</span>
            <span className={cn(styles.content, contentClassName)}>{content}</span>
        </div>
    )
}

export default LabelContent

