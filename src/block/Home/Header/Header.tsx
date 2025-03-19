"use client";

import {usePathname} from "next/navigation";
import Link from 'next/link';

import {Button} from "@/components/ui";
import {aladin} from "@/lib/utils";

import styles from './Header.module.css';

const Header = () => {

    const pathname = usePathname();

    return (
        <>
            {
                !(pathname.includes("/login") || pathname.includes("/signup")) &&
                <header className={styles.header}>
                    <Link href="/" className={`${styles.title} ${aladin.className}`}>
                        PROJECT RPG
                    </Link>

                    <nav className={styles.nav}>
                        <Link href="/login" className={styles.link}>
                            Se Connecter
                        </Link>

                        <Button href="/register" variant="primary">S&apos;inscrire</Button>
                    </nav>
                </header>
            }
        </>
    );

};

export default Header;