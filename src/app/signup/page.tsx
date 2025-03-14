"use client";

import {ChangeEvent, FormEvent, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {Button, FormInput, PasswordInput} from "@/components/ui";
import {signupSchema} from "@/lib/schemas";

import styles from "@/app/login.module.css";

const SignupPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    });

    const [fieldErrors, setFieldErrors] = useState<Map<string, string>>(new Map());

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {

        }
    };

    const validateForm = () => {
        const newErrors: Map<string, string> = new Map<string, string>();

        if (formData.password !== formData.confirmPassword) {
            newErrors.set("confirmPassword", "Les mots de passe ne correspondent pas");
        }

        const validation = signupSchema.safeParse(formData);

        if (!validation.success) {
            validation.error.issues.forEach(issue => {
                newErrors.set(issue.path[0] as string, issue.message);
            });
        }

        setFieldErrors(newErrors);

        return newErrors.size === 0;
    };

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

                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <FormInput
                                label="Adresse e-mail"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                error={fieldErrors.get("email")}
                                required
                            />

                            <FormInput
                                label="Nom d'utilisateur"
                                id="username"
                                type="text"
                                value={formData.username}
                                onChange={handleFormChange}
                                error={fieldErrors.get("username")}
                                required
                            />

                            <div className="w-full flex justify-between gap-4">
                                <FormInput
                                    label="Nom"
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                    error={fieldErrors.get("lastName")}
                                    required
                                />

                                <FormInput
                                    label="Prénom"
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                    error={fieldErrors.get("firstName")}
                                    required
                                />
                            </div>

                            <PasswordInput
                                label="Mot de passe"
                                id="password"
                                value={formData.password}
                                onChange={handleFormChange}
                                error={fieldErrors.get("password")}
                                required
                            />

                            <PasswordInput
                                label="Confirmer le mot de passe"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleFormChange}
                                error={fieldErrors.get("confirmPassword")}
                                required
                            />

                            <Button type="submit" variant="primary" className={styles.loginButton}>
                                S&apos;inscrire
                            </Button>

                            <div className={styles.signupContainer}>
                                <span className={styles.signupText}>Déjà un compte ? </span>
                                <Link href="/login" className={styles.signupLink}>
                                    Se connecter
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SignupPage;