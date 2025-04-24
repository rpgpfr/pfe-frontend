"use client";

import Link from "next/link";
import {ChangeEvent, FormEvent, useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

import {signupSchema} from "@/lib/schemas";
import {Button, FormInput, PasswordInput} from "@/components/ui";

import styles from "./SignupForm.module.css";

const SignupForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    });
    const [submitError, setSubmitError] = useState<string>("");
    const [fieldErrors, setFieldErrors] = useState<Map<string, string>>(new Map());
    const router = useRouter();

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const signupBody = {
                    email: formData.email,
                    username: formData.username,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    password: formData.password
                };

                const options: RequestInit = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(signupBody)
                };

                const signupResponse = await fetch("/api/auth/signup", options);

                if (signupResponse.ok) {
                    const loginResponse = await signIn("credentials", {
                        identifier: formData.username,
                        password: formData.password,
                        redirect: false
                    });

                    if (loginResponse?.error) {
                        setSubmitError("Votre compte a été créé, mais une erreur s'est produite lors de la connexion");
                    } else {
                        router.push("/");
                    }

                } else {
                    const errorMessage = (await signupResponse.json()).error;

                    setSubmitError(errorMessage);
                }
            } catch (error) {
                console.error(error);

                setSubmitError(error instanceof Error ? error.message : "Une erreur s'est produite lors de l'inscription");
            }
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

                    <div>
                        <Button type="submit" variant="primary" className={styles.signupButton}>
                            S&apos;inscrire
                        </Button>

                        <p className={styles.error}>{submitError}</p>
                    </div>
                </form>

                <div className={styles.loginLinkContainer}>
                    <span className={styles.loginText}>Déjà un compte ? </span>
                    <Link href="/login" className={styles.loginLink}>
                        Se connecter
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default SignupForm;