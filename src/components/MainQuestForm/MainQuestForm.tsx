"use client";

import {ChangeEvent, FC, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

import {Button, FormInput} from "@/components/ui";
import {Quest} from "rpg-project/campaign";

import styles from "./MainQuestForm.module.css";

interface CampaignInfoFormProps {
    handleClose: () => void;
    quest: Quest;
    slug: string;
}

const MainQuestForm: FC<CampaignInfoFormProps> = ({handleClose, quest, slug}) => {

    const [formData, setFormData] = useState({
        title: quest.title || "",
        description: quest.description || "",
    });
    const [submitError, setSubmitError] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const options: RequestInit = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    type: quest.type,
                    goals: []
                })
            };

            const response = await fetch(`/api/campaigns/${slug}/mainQuest`, options);

            if (response.ok) {
                handleClose();
                router.refresh();
            } else {
                const errorMessage = (await response.json()).error;

                setSubmitError(errorMessage);
            }
        } catch (error) {
            console.error(error);

            setSubmitError(error instanceof Error ? error.message : "Une erreur s'est produite lors de la mise à jour des informations");
        }
    };

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <form className={styles.mainQuestForm} onSubmit={handleSubmit}>
            <FormInput
                id="title"
                label="Titre"
                type="text"
                value={formData.title}
                onChange={handleFormChange}
            />

            <FormInput
                id="description"
                label="Description"
                type="text"
                value={formData.description}
                onChange={handleFormChange}
            />

            {submitError && <p className={styles.error}>{submitError}</p>}

            <div className={styles.buttonsContainer}>
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="px-4 py-2"
                >
                    Annuler
                </Button>

                <Button variant="primary" type="submit" className="px-4 py-2">
                    Enregistrer les informations
                </Button>
            </div>
        </form>
    );

};

export default MainQuestForm;