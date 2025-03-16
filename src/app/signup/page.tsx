"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/ui/Button"
import FormInput from "@/components/ui/FormInput/FormInput"
import PasswordInput from "@/components/ui/PasswordInput/PasswordInput"
import styles from "../login/login.module.css"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            console.log("Tentative d'inscription avec:", email)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <Image src="/placeholder.svg?height=1080&width=1080" alt="Background" fill className="object-cover" />
                <div className={styles.backgroundOverlay} />
                <div className={styles.leftContent}>
                    <h1 className={styles.welcomeTitle}>Rejoignez l&apos;aventure !</h1>
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

                            <PasswordInput
                                label="Confirmer le mot de passe"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                error={errors.confirmPassword}
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
    )
}

