import {signOut} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

import UserIcon from "/public/images/icons/user.svg";

import styles from './DropDownProfil.module.css';

const DropDownProfil = () => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.icon}
                src={UserIcon}
                alt="Icône du profil"
                width={36}
                height={36}
            />

            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown}>
                    <ul>
                        <li>
                            <Link href="/profile">Profil</Link>
                        </li>

                        <li onClick={() => signOut()}>
                            Se déconnecter
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DropDownProfil;
