'use client'

import styles from './DropDownProfil.module.css';
import { useState } from "react";
import Image from "next/image";
import UserIcon from "/public/images/icons/user.svg";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const DropDownProfil = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    className={styles.icon}
                    src={UserIcon}
                    alt="Icône du profil"
                    width={30}
                    height={30}
                />
            </button>

            {isOpen && session && (
                <div className={styles.dropdown}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link href="/profil">Profil</Link>
                        </li>
                        <li className={styles.listItem} onClick={() => signOut()}>
                            Se déconnecter
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropDownProfil;
