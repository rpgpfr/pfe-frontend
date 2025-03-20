"use client";

import type {ChangeEvent, ReactNode} from "react";

import {cn} from "@/lib/utils";

import styles from "./TextField.module.css";

interface TextFieldProps {
    type?: "text" | "email" | "password" | "search";
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    icon?: ReactNode;
    className?: string;
}

const TextField = ({type, placeholder, value, onChange, icon, className}: TextFieldProps) => {

    const textFieldClasses = cn(styles.textField, className);

    return (
        <div className={textFieldClasses}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.input}
            />

            {
                icon &&
                <div className={styles.icon}>{icon}</div>
            }
        </div>
    );

};

export default TextField;