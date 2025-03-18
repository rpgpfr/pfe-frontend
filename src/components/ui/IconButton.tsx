"use client"
import type {LucideIcon} from "lucide-react"

interface IconButtonProps {
    icon: LucideIcon
    onClick?: () => void
    variant?: "primary" | "secondary" | "outline"
    className?: string
    ariaLabel: string
}

export default function IconButton({
                                       icon: Icon,
                                       onClick,
                                       variant = "primary",
                                       className = "",
                                       ariaLabel,
                                   }: IconButtonProps) {
    const baseStyles = "p-2 rounded-[4px] flex items-center justify-center"

    const variantStyles = {
        primary: "bg-primary-green text-white hover:bg-white hover:text-black hover:border hover:border-black",
        secondary: "bg-beige text-white hover:bg-opacity-90",
        outline: "border border-gray-300 text-gray-700",
    }

    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

    return (
        <button type="button" onClick={onClick} className={buttonStyles} aria-label={ariaLabel}>
            <Icon className="w-5 h-5"/>
        </button>
    )
}

