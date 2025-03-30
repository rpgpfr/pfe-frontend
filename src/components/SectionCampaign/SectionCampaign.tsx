"use client"
import {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './SectionCampaign.module.css';
import {aladin} from "@/lib/utils";
import Button from "@/components/ui/Button/Button";
import {Pencil} from 'lucide-react';

interface Props  extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    children: ReactNode;
}

const SectionCampaign = ({ title, onClick, children }: Props) => {
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

export default SectionCampaign;