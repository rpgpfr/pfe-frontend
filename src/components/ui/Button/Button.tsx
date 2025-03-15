"use client";

import {ButtonHTMLAttributes, ReactNode} from "react";
import Link from "next/link";
import {cva, VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    children: ReactNode;
    href?: string;
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

const Button = ({children, className, href, type, onClick, variant}: ButtonProps) => {

    const buttonClasses = cn(buttonVariants({variant: variant}), className);

    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type || "button"} onClick={onClick} className={buttonClasses}>
            {children}
        </button>
    );

};

export default Button;