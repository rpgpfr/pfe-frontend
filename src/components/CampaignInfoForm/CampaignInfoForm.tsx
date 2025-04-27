"use client";

import {ChangeEvent, FC, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

import {Button, FormInput} from "@/components/ui";
import {Info} from "rpg-project/campaign";

import styles from "./CampaignInfoForm.module.css";

interface CampaignInfoFormProps {
    handleClose: () => void;
    info: Info;
    slug: string;
}

const CampaignInfoForm: FC<CampaignInfoFormProps> = ({handleClose, info, slug}) => {

    const [formData, setFormData] = useState({
        description: info.description || "",
        type: info.type || "",
        mood: info.mood || ""
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
                    description: formData.description,
                    type: formData.type,
                    mood: formData.mood
                })
            };

            const response = await fetch(`/api/campaigns/${slug}`, options);

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

    const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <form className={styles.campaignInfoForm} onSubmit={handleSubmit}>
            <FormInput
                id="type"
                label="Type"
                type="text"
                value={formData.type}
                onChange={handleFormChange}
            />

            <FormInput
                id="mood"
                label="Ambiance"
                type="text"
                value={formData.mood}
                onChange={handleFormChange}
            />

            <FormInput
                id="description"
                label="Description"
                type="textarea"
                value={formData.description}
                onChange={handleFormChange}
            />

            {submitError && <p className={styles.error}>{submitError}</p>}

            <div className={styles.buttonsContainer}>
                <Button variant="primary" type="submit" className="px-4 py-2">
                    Enregistrer les informations
                </Button>

                <Button variant="outline" className="px-4 py-2" onClick={handleClose}>
                    Annuler
                </Button>
            </div>
        </form>
    );

};

export default CampaignInfoForm;