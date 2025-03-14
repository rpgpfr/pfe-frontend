import Link from "next/link";
import Image from "next/image";

import {SignupForm} from "@/components";

import styles from "./signup.module.css";

const SignupPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <Image src="/placeholder.svg?height=1080&width=1080" alt="Background" fill className="object-cover"/>

                <div className={styles.backgroundOverlay}/>

                <div className={styles.leftContent}>
                    <h2 className={styles.welcomeTitle}>Rejoignez l&apos;aventure !</h2>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        <h1 className={styles.logoText}>Project RPG</h1>
                    </Link>
                </div>

                <SignupForm />
            </div>
        </div>
    );

};

export default SignupPage;