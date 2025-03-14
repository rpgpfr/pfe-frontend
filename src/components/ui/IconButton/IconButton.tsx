"use client"

import {LucideIcon} from "lucide-react";
import {cva} from "class-variance-authority";

import {cn} from "@/lib/utils";

import styles from "./IconButton.module.css";

interface IconButtonProps {
    icon: LucideIcon;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    ariaLabel: string;
}

const iconButtonVariants = cva(
    styles.button,
    {
        variants: {
            variant: {
                primary: styles.primary,
                secondary: styles.secondary,
                outline: styles.outline
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);

const IconButton = (props: IconButtonProps) => {

    const buttonClasses = cn(iconButtonVariants({variant: props.variant}), props.className);

    return (
        <button type="button" onClick={props.onClick} className={buttonClasses} aria-label={props.ariaLabel}>
            <props.icon className="w-5 h-5"/>
        </button>
    );

};

export default IconButton;