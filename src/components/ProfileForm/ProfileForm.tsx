"use client";

import {ChangeEvent, FormEvent, useState} from "react";
import {Pen} from "lucide-react";
import {useRouter} from "next/navigation";

import {aladin} from "@/lib/utils";
import {UserProfile} from "rpg-project";
import {profileFormSchema} from "@/lib/schemas";
import {Button, FormInput} from "@/components/ui";

import styles from "./ProfileForm.module.css";

interface ProfileFormProps {
    profile: UserProfile
}

const ProfileForm = ({profile}: ProfileFormProps) => {
    const [formData, setFormData] = useState({
        description: profile.description || "",
        lastName: profile.lastName,
        firstName: profile.firstName,
        username: profile.username,
        email: profile.email,
        rpgKnowledge: profile.rpgKnowledge || "",
        signedUpAt: profile.signedUpAt,
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [fieldErrors, setFieldErrors] = useState<Map<string, string>>(new Map());
    const [submitError, setSubmitError] = useState<string>("");

    const router = useRouter();

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setFormData({
            description: profile.description || "",
            lastName: profile.lastName,
            firstName: profile.firstName,
            username: profile.username,
            email: profile.email,
            rpgKnowledge: profile.rpgKnowledge || "",
            signedUpAt: profile.signedUpAt,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const options: RequestInit = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                };

                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profile`, options);

                if (response.ok) {
                    setIsEditing(false);
                    router.refresh();
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

        const validation = profileFormSchema.safeParse(formData);

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
                <h1 className={`${styles.formTitle} ${aladin.className}`}>Vos informations</h1>

                <div className={styles.profileHeader}>
                    {!isEditing && (
                        <button
                            className={styles.editButton}
                            aria-label="Modifier"
                            onClick={handleEditClick}
                        >
                            <Pen className="w-5 h-5"/>
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <FormInput
                            id="description"
                            type="textarea"
                            label={"Description"}
                            className="min-h-[80px] resize-y"
                            value={formData.description}
                            onChange={handleFormChange}
                            placeholder="Dites-en un peu plus sur vous !"
                            disabled={!isEditing}
                        />
                    </fieldset>

                    <fieldset className={styles.formRow}>
                        <FormInput
                            id="lastName"
                            type="text"
                            label="Nom"
                            className="flex-1"
                            value={formData.lastName}
                            onChange={handleFormChange}
                            error={fieldErrors.get("lastName")}
                            disabled={!isEditing}
                        />

                        <FormInput
                            id="firstName"
                            type="text"
                            label="Prénom"
                            className="flex-1"
                            value={formData.firstName}
                            onChange={handleFormChange}
                            error={fieldErrors.get("firstName")}
                            disabled={!isEditing}
                        />
                    </fieldset>

                    <fieldset className={styles.formRow}>
                        <FormInput
                            id="username"
                            type="text"
                            label="Nom d'utilisateur"
                            className="flex-1"
                            value={formData.username}
                            onChange={handleFormChange}
                            error={fieldErrors.get("username")}
                            disabled={!isEditing}
                        />
                        <FormInput
                            id="email"
                            type="email"
                            label="Adresse e-mail"
                            className="flex-1"
                            value={formData.email}
                            onChange={handleFormChange}
                            error={fieldErrors.get("email")}
                            disabled={!isEditing}
                        />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="rpgKnowledge" className={styles.formLabel}>
                            Niveau de connaissance du RPG
                        </label>
                        <input
                            id="rpgKnowledge"
                            type="text"
                            value={formData.rpgKnowledge}
                            onChange={handleFormChange}
                            className={styles.formInput}
                            placeholder="Mon niveau"
                            disabled={!isEditing}
                        />
                    </fieldset>

                    {submitError && <p className={styles.error}>{submitError}</p>}

                    {isEditing && (
                        <div className={styles.formActions}>
                            <Button variant="outline" onClick={handleCancelClick}>
                                Annuler
                            </Button>

                            <Button type="submit" variant="primary">
                                Valider
                            </Button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
