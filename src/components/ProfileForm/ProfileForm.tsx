"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { revalidatePath } from "next/cache";
import { Pen } from "lucide-react";
import styles from "./ProfileForm.module.css";
import { aladin } from "@/lib/utils";
import { FormInput } from "../ui";

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

  const [isEditing, setIsEditing] = useState(false); // État pour savoir si on est en mode édition
  const [submitError, setSubmitError] = useState<string>("");

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true); // Active le mode édition
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Désactive le mode édition
    setFormData(initialData); // Réinitialise les champs avec les données initiales
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const options: RequestInit = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch("/api/user/profile", options);

      if (response.ok) {
        revalidatePath("/profile", "page");
        setIsEditing(false); // Désactive le mode édition après validation
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
          {!isEditing && (
            <button
              className={styles.editButton}
              aria-label="Modifier"
              onClick={handleEditClick}
            >
              <Pen className="w-5 h-5" />
            </button>
          )}
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
              disabled={!isEditing}
            />
          </fieldset>

          <div className={styles.formRow}>
            <fieldset className={styles.formGroup}>
              <FormInput
                id="lastName"
                label="Nom"
                value={formData.lastName}
                onChange={handleFormChange}
                disabled={!isEditing}
              />
            </fieldset>

            <fieldset className={styles.formGroup}>
              <FormInput
                id="firstName"
                label="Prénom"
                value={formData.firstName}
                onChange={handleFormChange}
                disabled={!isEditing}
              />
            </fieldset>
          </div>

          <div className={styles.formRow}>
            <fieldset className={styles.formGroup}>
              <FormInput
                id="username"
                label="Nom d'utilisateur"
                value={formData.username}
                onChange={handleFormChange}
                disabled={!isEditing}
              />
            </fieldset>

            <fieldset className={styles.formGroup}>
              <FormInput
                id="email"
                label="Adresse e-mail"
                value={formData.email}
                onChange={handleFormChange}
                disabled={!isEditing}
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
              disabled={!isEditing}
            />
          </fieldset>

          {isEditing && (
            <div className={styles.formActions}>
              <button
                type="button"
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={handleCancelClick}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Valider
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;