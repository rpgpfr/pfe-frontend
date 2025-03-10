"use client"

import { useState, type InputHTMLAttributes } from "react"
import { Eye, EyeOff } from "lucide-react"

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type"> {
    label: string
    id: string
    error?: string
    className?: string
}

export default function PasswordInput({ label, id, error, className = "", ...props }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div style={{ marginBottom: "1rem" }} className={className}>
            <label
                htmlFor={id}
                style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "0.25rem",
                    transition: "color 0.2s",
                    color: isFocused ? "#22c55e" : "#374151"
                }}
            >
                {label}
            </label>
            <div style={{ position: "relative" }}>
                <input
                    id={id}
                    type={showPassword ? "text" : "password"}
                    style={{
                        width: "100%",
                        borderRadius: "0.375rem",
                        border: "1px solid #d1d5db",
                        padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                        outline: "none",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        borderColor: isFocused ? "#22c55e" : "#d1d5db",
                        boxShadow: isFocused ? "0 0 0 1px #22c55e" : "none"
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    style={{
                        position: "absolute",
                        inset: "0 auto 0 0",
                        right: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "opacity 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    {showPassword ? <EyeOff style={{ width: "1.25rem", height: "1.25rem", color: "#9ca3af" }} /> : <Eye style={{ width: "1.25rem", height: "1.25rem", color: "#9ca3af" }} />}
                </button>
            </div>
            {error && <p style={{ marginTop: "0.25rem", fontSize: "0.875rem", color: "#dc2626" }}>{error}</p>}
        </div>
    )
}