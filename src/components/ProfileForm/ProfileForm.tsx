"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./ProfileForm.module.css";

const ProfileForm = ({ initialData }) => {
    const [formData, setFormData] = useState({
        description: initialData?.description || "",
        lastName: initialData?.lastName || "",
        firstName: initialData?.firstName || "",
        username: initialData?.username || "",
        email: initialData?.email || "",
        jdrKnowledgeLevel: initialData?.jdrKnowledgeLevel || ""
    });
    
    const [submitError, setSubmitError] = useState<string>("");
    const [fieldErrors, setFieldErrors] = useState<Map<string, string>>(new Map());
    const router = useRouter();

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const options: RequestInit = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                };

                const response = await fetch("/api/user/profile", options);

                if (response.ok) {
                    router.push("/profile");
                } else {
                    const errorMessage = (await response.json()).error;
                    setSubmitError(errorMessage);
                }
            } catch (error) {
                console.error(error);
                setSubmitError("Une erreur s'est produite lors de la mise à jour du profil");
            }
        }
    };

    const validateForm = () => {
        const newErrors: Map<string, string> = new Map<string, string>();
        
        // Ajoutez ici votre logique de validation si nécessaire
        
        setFieldErrors(newErrors);
        return newErrors.size === 0;
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <h1 className={styles.formTitle}>Vos informations</h1>
                
                <div className={styles.profileHeader}>
                    <button className={styles.editButton} aria-label="Modifier">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="description" className={styles.formLabel}>Description</label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={handleFormChange}
                            className={styles.formTextarea}
                            placeholder="Ceci est la description de mon profil"
                            rows={3}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName" className={styles.formLabel}>Nom</label>
                            <input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="firstName" className={styles.formLabel}>Prénom</label>
                            <input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="username" className={styles.formLabel}>Nom d'utilisateur</label>
                            <input
                                id="username"
                                type="text"
                                value={formData.username}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Adresse e-mail</label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className={styles.formInput}
                                placeholder="Contenu du champ"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="jdrKnowledgeLevel" className={styles.formLabel}>Niveau de connaissance du JDR</label>
                        <input
                            id="jdrKnowledgeLevel"
                            type="text"
                            value={formData.jdrKnowledgeLevel}
                            onChange={handleFormChange}
                            className={styles.formInput}
                            placeholder="Contenu du champ"
                        />
                    </div>

                    <div className={styles.registrationInfo}>
                        <h2 className={styles.registrationTitle}>Inscrit depuis</h2>
                        <span className={styles.registrationDate}>: 22/07/2000</span>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ProfileForm;