"use client";

import {FormEvent, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {Button, FormInput, PasswordInput} from "@/components/ui";

import styles from "./login.module.css";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <Image src="/placeholder.svg?height=1080&width=1080" alt="Background" fill className="object-cover"/>

                <div className={styles.backgroundOverlay}/>

                <div className={styles.leftContent}>
                    <h2 className={styles.welcomeTitle}>Nous sommes heureux de vous retrouver !</h2>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        <h1 className={styles.logoText}>Project RPG</h1>
                    </Link>
                </div>

                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <FormInput
                                label="Adresse e-mail"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <PasswordInput
                                label="Mot de passe"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div className={styles.forgotPasswordContainer}>
                                <Link href="/forgot-password" className={styles.forgotPasswordLink}>
                                    Mot de passe oublié ?
                                </Link>
                            </div>

                            <Button type="submit" variant="primary" className={styles.loginButton}>
                                Se connecter
                            </Button>

                            <div className={styles.signupContainer}>
                                <span className={styles.signupText}>Pas de compte ? </span>
                                <Link href="/signup" className={styles.signupLink}>
                                    S&apos;inscrire
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default LoginPage;