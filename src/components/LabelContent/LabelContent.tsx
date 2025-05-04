import {FC, ReactNode} from "react";

import {cn} from "@/lib/utils";

import styles from "./LabelContent.module.css";

interface LabelContentProps {
    id: string;
    label: string;
    content: ReactNode;
    className?: string;
    labelClassName?: string;
    contentClassName?: string;
}

const LabelContent: FC<LabelContentProps> = ({
                                                 label,
                                                 content,
                                                 className = "",
                                                 labelClassName,
                                                 contentClassName,
                                             }) => {
    return (
        <div className={cn(styles.container, className)}>
            <p className={cn(styles.label, labelClassName)}>{label}</p>
            <p className={cn(styles.content, contentClassName)}>{content}</p>
        </div>
    )
}

export default LabelContent

