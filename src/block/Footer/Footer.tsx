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
                        <li>Conditions générales d&apos;utilisation</li>
                        <li>Confidentialité des données</li>
                    </ul>

                    <p className={`${styles.title} ${aladin.className}`}>PROJECT RPG</p>

                    <p className={styles.coords}>pfe@gmail.com</p>
                </footer>
            }
        </>
    );

};

export default Footer;