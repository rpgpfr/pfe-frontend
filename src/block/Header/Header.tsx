"use client";

import {usePathname} from "next/navigation";
import Link from 'next/link';
import {useSession} from "next-auth/react";

import {aladin} from "@/lib/utils";
import {DropDownProfil} from '@/components';
import {Button} from "@/components/ui";

import styles from './Header.module.css';

const Header = () => {

    const pathname = usePathname();
    const {status} = useSession();

    return (
        <>
            {
                !(pathname.includes("/login") || pathname.includes("/signup")) &&
                <header className={styles.header}>

                    <Link href="/" className={`${styles.title} ${aladin.className}`}>
                        RPGine
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
        <>
            <nav className={styles.nav}>
                <Link href="/campaigns">Campagnes</Link>
            </nav>

            <div>
                <DropDownProfil/>
            </div>
        </>

    );

};

const AnonymousNav = () => {

    return (
        <nav className={styles.nav}>
            <Button href="/login" variant="outline">
                Se connecter
            </Button>

            <Button href="/signup" variant="primary">
                S&apos;inscrire
            </Button>
        </nav>
    );

};

export default Header;