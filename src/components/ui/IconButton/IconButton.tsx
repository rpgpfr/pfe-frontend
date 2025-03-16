"use client"

import {LucideIcon} from "lucide-react";
import {ButtonHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";
import {iconButtonVariants} from "@/components/ui/IconButton/IconButtonVariants";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    icon: LucideIcon;
}

const IconButton = (props: IconButtonProps) => {

    const buttonClasses = cn(iconButtonVariants({variant: props.variant}), props.className);

    return (
        <button type="button" onClick={props.onClick} className={buttonClasses} aria-label={props["aria-label"]}>
            <props.icon className="w-5 h-5"/>
        </button>
    );

};

export default IconButton;