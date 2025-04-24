"use client";

import {Pencil} from 'lucide-react';
import {ButtonHTMLAttributes, ReactNode} from "react";

import {aladin} from "@/lib/utils";
import {Button} from "@/components/ui";

import styles from './CampaignSection.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    children: ReactNode;
}

const CampaignSection = ({title, onClick, children}: Props) => {
    return (
        <div className={styles.container}>
            <h2 className={`${aladin.className} ${styles.title}`}>{title}</h2>

            {children}

            <Button variant="primary" className={`${styles.button} mt-auto`} onClick={onClick}>
                <Pencil className={styles.icon}/>
            </Button>
        </div>
    );
}

export default CampaignSection;