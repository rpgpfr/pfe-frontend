import {cn} from "@/lib/utils";
import {FC, HTMLAttributes, ReactNode} from "react";

import styles from "./LabelContent.module.css";

interface LabelContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
    label: string
    content: ReactNode
    labelClassName?: string
    contentClassName?: string
}

const LabelContent: FC<LabelContentProps> = ({
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

