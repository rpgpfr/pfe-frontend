"use client";

import {ChangeEvent, FC, InputHTMLAttributes} from "react";

import {cn} from "@/lib/utils";

import styles from "./FormInput.module.css";

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value"> {
    label: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
    type: string;
    error?: string;
}

const FormInput: FC<FormInputProps> = ({label, id, onChange, value, error, className = "", type, ...props}) => {

    return (
        <div className={cn(styles.container, className)}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>

            {
                type === "textarea" ?
                    <textarea
                        id={id}
                        className={styles.input}
                        onChange={onChange}
                        value={value}
                        rows={8}
                    /> :
                    <input
                        id={id}
                        type={type}
                        className={styles.input}
                        onChange={onChange}
                        value={value}
                        {...props}
                    />
            }

            {
                error &&
                <p className={styles.error}>{error}</p>
            }
        </div>
    );

};

export default FormInput;
