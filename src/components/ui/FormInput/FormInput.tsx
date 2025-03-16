"use client"

import { useState, type InputHTMLAttributes } from "react"
import styles from "./FormInput.module.css"

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    label: string
    id: string
    error?: string
    className?: string
}

export default function FormInput({ label, id, error, className = "", ...props }: FormInputProps) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={`${styles.container} ${className}`}>
            <label htmlFor={id} className={`${styles.label} ${isFocused ? styles.labelFocused : styles.labelDefault}`}>
                {label}
            </label>
            <input
                id={id}
                className={styles.input}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

