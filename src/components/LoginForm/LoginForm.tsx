"use client";

import {FormEvent, useState} from "react";
import Link from "next/link";

import {Button, FormInput, PasswordInput} from "@/components/ui";

import styles from "./LoginForm.module.css";

const LoginForm = () => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <FormInput
                        label="Nom d'utilisateur ou adresse e-mail"
                        id="identifier"
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
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
    );

};

export default LoginForm;