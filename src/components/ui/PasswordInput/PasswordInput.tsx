"use client"

import {type InputHTMLAttributes, useState} from "react"
import {Eye, EyeOff} from "lucide-react"
import styles from "./PasswordInput.module.css"

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type"> {
    label: string
    id: string
    error?: string
    className?: string
}

export default function PasswordInput({label, id, error, className = "", ...props}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={`${styles.container} ${className}`}>
            <label htmlFor={id} className={`${styles.label} ${isFocused ? styles.labelFocused : styles.labelDefault}`}>
                {label}
            </label>
            <div className={styles.inputWrapper}>
                <input
                    id={id}
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                <button
                    type="button"
                    className={styles.toggleButton}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400"/> :
                        <Eye className="h-5 w-5 text-gray-400"/>}
                </button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

