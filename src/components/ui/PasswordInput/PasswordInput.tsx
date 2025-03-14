"use client";

import {type InputHTMLAttributes, useState} from "react";
import {Eye, EyeOff} from "lucide-react";

import {cn} from "@/lib/utils";

import styles from "./PasswordInput.module.css";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
    label: string;
    id: string;
    error?: string;
}

const PasswordInput = ({label, id, error, className = "", ...props}: PasswordInputProps) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={cn(styles.container, className)}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>

            <div className={styles.inputWrapper}>
                <input
                    id={id}
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    {...props}
                />

                <button
                    type="button"
                    className={styles.toggleButton}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                    {
                        showPassword ?
                            <EyeOff className="h-5 w-5 text-gray-400"/>
                            :
                            <Eye className="h-5 w-5 text-gray-400"/>
                    }
                </button>
            </div>

            {
                error &&
                <p className={styles.error}>{error}</p>
            }
        </div>
    );

};

export default PasswordInput;