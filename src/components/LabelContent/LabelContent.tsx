import {FC, HTMLAttributes, ReactNode} from "react";

import {cn} from "@/lib/utils";

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
            <p className={cn(styles.label, labelClassName)}>{label}</p>
            <p className={cn(styles.content, contentClassName)}>{content}</p>
        </div>
    )
}

export default LabelContent

