"use client"

import {LucideIcon} from "lucide-react";
import {cva, VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";

import styles from "./IconButton.module.css";
import {ButtonHTMLAttributes} from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    icon: LucideIcon;
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
        <button type="button" onClick={props.onClick} className={buttonClasses} aria-label={props["aria-label"]}>
            <props.icon className="w-5 h-5"/>
        </button>
    );

};

export default IconButton;