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

const TextField = (props: TextFieldProps) => {

    const textFieldClasses = cn(styles.textField, props.className);

    return (
        <div className={textFieldClasses}>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={styles.input}
            />

            {
                props.icon &&
                <div className={styles.icon}>{props.icon}</div>
            }
        </div>
    );

};

export default TextField;