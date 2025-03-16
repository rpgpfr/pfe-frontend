"use client"

import type React from "react"
import Link from "next/link"

interface ButtonProps {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "outline" | "icon"
    href?: string
    onClick?: () => void
    className?: string
    type?: "button" | "submit" | "reset"
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   href,
                                   onClick,
                                   className = "",
                                   type = "button",
                               }: ButtonProps) {
    const baseStyles = "rounded-[4px] transition-all"

    const variantStyles = {
        primary: "bg-primary-green text-white hover:bg-white hover:text-black hover:border hover:border-black px-6 py-2",
        secondary: "bg-beige text-white hover:bg-opacity-90",
        outline: "border border-gray-300 text-gray-700",
        icon: "p-2 flex items-center justify-center",
    }

    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

    if (href) {
        return (
            <Link href={href} className={buttonStyles}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={buttonStyles}>
            {children}
        </button>
    )
}

