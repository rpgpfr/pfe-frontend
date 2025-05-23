import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";

import {SignupForm} from "@/components";
import {aladin} from "@/lib/utils";

import styles from "./signup.module.css";

export const metadata: Metadata = {
    title: "RPGine - Inscription",
    description: "Créez un compte gratuit pour commencer à organiser vos assets de jeu de rôle. Lancez vos campagnes et gérez vos univers en ligne.",
};

const SignupPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <div className={styles.backgroundWrapper}>
                    <Image
                        src="/images/signup.webp"
                        alt=""
                        fill
                        className={styles.heroBackground}
                    />
                </div>

                <div className={styles.leftContent}>
                    <h2 className={styles.welcomeTitle}>Rejoignez l&apos;aventure !</h2>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        <h1 className={`${styles.logoText} ${aladin.className}`}>RPGine</h1>
                    </Link>
                </div>

                <SignupForm/>
            </div>
        </div>
    );

};

export default SignupPage;
