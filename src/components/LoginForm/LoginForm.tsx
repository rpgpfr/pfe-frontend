"use client";

import {ChangeEvent, FormEvent, useState} from "react";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

import {loginSchema} from "@/lib/schemas";
import {Button, FormInput, PasswordInput} from "@/components/ui";

import styles from "./LoginForm.module.css";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        identifier: "",
        password: ""
    });
    const [submitError, setSubmitError] = useState("");
    const router = useRouter();

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const loginResponse = await signIn("credentials", {
                    identifier: formData.identifier,
                    password: formData.password,
                    redirect: false,
                });

                if (loginResponse?.error) {
                    setSubmitError("L'identifiant ou le mot de passe est incorrect.");
                } else {
                    router.push("/");
                }
            } catch (error) {
                setSubmitError((error as Error).message)
            }
        }
    };

    const validateForm = () => {
        const validation = loginSchema.safeParse(formData);

        return validation.success;
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <FormInput
                        label="Nom d'utilisateur ou adresse e-mail"
                        id="identifier"
                        type="text"
                        value={formData.identifier}
                        onChange={handleFormChange}
                        required
                    />

                    <div className={styles.passwordContainer}>
                        <PasswordInput
                            label="Mot de passe"
                            id="password"
                            value={formData.password}
                            onChange={handleFormChange}
                            required
                        />

                        <div className={styles.forgotPasswordContainer}>
                            <Link href="/forgot-password" className={styles.forgotPasswordLink}>
                                Mot de passe oublié ?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" variant="primary" className={styles.loginButton}>
                            Se connecter
                        </Button>

                        <p className={styles.error}>{submitError}</p>
                    </div>
                </form>

                <div className={styles.signupLinkContainer}>
                    <span className={styles.signupText}>Vous ne possédez pas de compte ? </span>
                    <Link href="/signup" className={styles.signupLink}>
                        S&apos;inscrire
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default LoginForm;