"use client";

import {usePathname} from "next/navigation";
import Link from 'next/link';
import {aladin} from "@/lib/utils";
import styles from './Header.module.css';
import {Button, DropDownProfil} from '@/components';
import {useSession} from "next-auth/react";

const Header = () => {

    const pathname = usePathname();
    const {status} = useSession();

    return (
        <>
            {
                !(pathname.includes("/login") || pathname.includes("/signup")) &&
                <header className={styles.header}>

                    <Link href="/" className={`${styles.title} ${aladin.className}`}>
                        Project RPG
                    </Link>

                    {
                        status !== "loading" &&
                        <>
                            {
                                status === "authenticated" ?
                                    <ConnectedNav/>
                                    :
                                    <AnonymousNav/>
                            }
                        </>

                    }

                </header>
            }
        </>
    );

};

const ConnectedNav = () => {

    return (
        <nav className={styles.nav}>
            <DropDownProfil/>
        </nav>
    );

};

const AnonymousNav = () => {

    return (
        <nav className={styles.nav}>
            <Link href="/login" className={styles.link}>
                Se connecter
            </Link>

            <Button href="/register" variant="primary">S&apos;inscrire</Button>
        </nav>
    );

};

export default Header;