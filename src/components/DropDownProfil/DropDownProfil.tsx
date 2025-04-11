import styles from './DropDownProfil.module.css';
import Image from "next/image";
import UserIcon from "/public/images/icons/user.svg";
import Link from "next/link";
import {signOut} from "next-auth/react";

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
                            <Link href="/profil">Profil</Link>
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
