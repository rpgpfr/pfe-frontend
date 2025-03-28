"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { revalidatePath } from "next/cache";
import { Pen } from "lucide-react";
import styles from "./ProfileForm.module.css";
import {aladin} from "@/lib/utils";

interface ProfileFormProps {
    initialData: {
        description: string;
        lastName: string;
        firstName: string;
        username: string;
        email: string;
        rpgKnowledgeLevel: string;
    };
}

const ProfileForm = ({ initialData }: ProfileFormProps) => {
    const [formData, setFormData] = useState({
        description: initialData.description,
        lastName: initialData.lastName,
        firstName: initialData.firstName,
        username: initialData.username,
        email: initialData.email,
        rpgKnowledgeLevel: initialData.rpgKnowledgeLevel,
    });

    const [submitError, setSubmitError] = useState<string>("");

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const options: RequestInit = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            };

            const response = await fetch("/api/user/profile", options);

            if (response.ok) {
                revalidatePath("/profile", "page");
            } else {
                const errorMessage = (await response.json()).error;
                setSubmitError(errorMessage);
            }
        } catch (error) {
            console.error(error);
            setSubmitError("Une erreur s'est produite lors de la mise à jour du profil");
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <h1 className={`${styles.formTitle} ${aladin.className}`}>Vos informations</h1>

                <div className={styles.profileHeader}>
                    <button className={styles.editButton} aria-label="Modifier">
                        <Pen className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <fieldset className={styles.formGroup}>
                        <label htmlFor="description" className={styles.formLabel}>
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={handleFormChange}
                            className={styles.formTextarea}
                            placeholder="Ceci est la description de mon profil"
                            rows={3}
                        />
                    </fieldset>

                    <div className={styles.formRow}>
                        <fieldset className={styles.formGroup}>
                            <label htmlFor="lastName" className={styles.formLabel}>
                                Nom
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label htmlFor="firstName" className={styles.formLabel}>
                                Prénom
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </fieldset>
                    </div>

                    <div className={styles.formRow}>
                        <fieldset className={styles.formGroup}>
                            <label htmlFor="username" className={styles.formLabel}>
                                Nom d&apos;utilisateur
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={formData.username}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Adresse e-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </fieldset>
                    </div>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="rpgKnowledgeLevel" className={styles.formLabel}>
                            Niveau de connaissance du RPG
                        </label>
                        <input
                            id="rpgKnowledgeLevel"
                            type="text"
                            value={formData.rpgKnowledgeLevel}
                            onChange={handleFormChange}
                            className={styles.formInput}
                            placeholder="Contenu du champ"
                        />
                    </fieldset>

                    <div className={styles.registrationInfo}>
                        <h2 className={`${styles.registrationTitle} ${aladin.className}`}>Inscrit depuis</h2>
                        <span className={styles.registrationDate}>: 22/07/2000</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;