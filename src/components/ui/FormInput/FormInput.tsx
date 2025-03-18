"use client";

import {type InputHTMLAttributes} from "react";

import {cn} from "@/lib/utils";

import styles from "./FormInput.module.css";

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
    label: string;
    id: string;
    error?: string;
}

const FormInput = ({label, id, error, className = "", ...props}: FormInputProps) => {

    return (
        <div className={cn(styles.container, className)}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>

            <input
                id={id}
                className={styles.input}
                {...props}
            />

            {
                error &&
                <p className={styles.error}>{error}</p>
            }
        </div>
    );

};

export default FormInput;
