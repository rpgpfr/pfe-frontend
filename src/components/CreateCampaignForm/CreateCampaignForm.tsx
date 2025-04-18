"use client";

import {Button, FormInput} from "@/components";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

import styles from "./CreateCampaignForm.module.css";

type CreateCampaignFormProps = {
    handleCancel: () => void;
}

const CreateCampaignForm = ({handleCancel}: CreateCampaignFormProps) => {

    const [campaignName, setCampaignName] = useState<string>("");
    const [submitError, setSubmitError] = useState<string>("");

    const router = useRouter();

    const handleCreateCampaign = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const options: RequestInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: campaignName
                })
            };

            const response = await fetch("/api/campaigns", options);

            if (response.ok) {
                handleCancel();
                router.refresh();
            } else {
                const errorMessage = (await response.json()).error;

                setSubmitError(errorMessage);
            }
        } catch (error) {
            console.error(error);

            setSubmitError(error instanceof Error ? error.message : "Une erreur s'est produite lors de l'inscription");
        }
    }

    return (
        <form onSubmit={handleCreateCampaign} className={styles.createCampaignForm}>
            <FormInput
                label="Nom de la campagne"
                id="campaignName"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
            />

            <p className={styles.information}>Vous pourrez modifier les détails de votre campagne
                après sa création.</p>

            {submitError && <p className={styles.error}>{submitError}</p>}

            <div className={styles.buttonsContainer}>
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className="px-4 py-2"
                >
                    Annuler
                </Button>
                <Button type="submit" variant="primary" className="px-4 py-2">
                    Créer la campagne
                </Button>
            </div>
        </form>
    );

};

export default CreateCampaignForm;