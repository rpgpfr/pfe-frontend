"use client";

import {ButtonHTMLAttributes, ReactNode} from "react";
import Link from "next/link";
import {VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/Button/buttonVariants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
    href?: string;
    type?: "button" | "submit" | "reset";
}

const Button = ({children, className, href, type, onClick, variant}: ButtonProps) => {

    const buttonClasses = cn(buttonVariants({variant: variant}), className);
    console.log(buttonClasses);

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