"use client";

import type React from "react";
import Link from "next/link";
import {cva} from "class-variance-authority";

import {cn} from "@/lib/utils";

import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "icon";
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const buttonVariants = cva(
    styles.button,
    {
        variants: {
            variant: {
                primary: styles.primary,
                secondary: styles.secondary,
                outline: styles.outline,
                icon: styles.icon
            }
        }
    }
);

const Button = (props: ButtonProps) => {

    const buttonClasses = cn(buttonVariants({variant: props.variant}), props.className);

    if (props.href) {
        return (
            <Link href={props.href} className={buttonClasses}>
                {props.children}
            </Link>
        );
    }

    return (
        <button type={props.type || "button"} onClick={props.onClick} className={buttonClasses}>
            {props.children}
        </button>
    );

};

export default Button;