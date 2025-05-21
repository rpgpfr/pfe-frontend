import Link from "next/link";
import Image from "next/image";

import {LoginForm} from "@/components";
import {aladin} from "@/lib/utils";

import styles from "./login.module.css";

const LoginPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <div className={styles.backgroundWrapper}>
                    <Image
                        src="/images/login.jpg"
                        alt=""
                        fill
                        className={styles.heroBackground}
                    />
                </div>

                <div className={styles.leftContent}>
                    <h2 className={styles.welcomeTitle}>Nous sommes heureux de vous retrouver !</h2>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        <h1 className={`${styles.logoText} ${aladin.className}`}>RPGine</h1>
                    </Link>
                </div>

                <LoginForm/>
            </div>
        </div>
    );

};

export default LoginPage;
