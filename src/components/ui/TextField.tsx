"use client"

import type React from "react"

interface TextFieldProps {
    type?: "text" | "email" | "password" | "search"
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    icon?: React.ReactNode
    className?: string
}

export default function TextField({
                                      type = "text",
                                      placeholder,
                                      value,
                                      onChange,
                                      icon,
                                      className = "",
                                  }: TextFieldProps) {
    return (
        <div className={`relative ${className}`}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-[4px]"
            />
            {icon && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
        </div>
    )
}

