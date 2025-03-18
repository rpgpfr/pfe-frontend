"use client";

import {usePathname} from "next/navigation";

import {aladin} from "@/lib/utils";

import styles from './Footer.module.css';

const Footer = () => {

    const pathname = usePathname();

    return (
        <>
            {
                !(pathname.includes("/login") || pathname.includes("/signup")) &&
                <footer className={styles.footer}>
                    <ul>
                        <li>Accueil</li>
                        <li>Se connecter</li>
                        <li>S&apos;inscrire</li>
                    </ul>

                    <p className={`${styles.title} ${aladin.className}`}>PROJECT RPG</p>

                    <p>pfe@gmail.com</p>
                </footer>
            }
        </>
    );

};

export default Footer;