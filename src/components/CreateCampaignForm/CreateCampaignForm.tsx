"use client";

import {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

import {Button, FormInput} from "@/components/ui";

import styles from "./CreateCampaignForm.module.css";

type CreateCampaignFormProps = {
    handleClose: () => void;
}

const CreateCampaignForm = ({handleClose}: CreateCampaignFormProps) => {

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

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns`, options);

            if (response.ok) {
                handleClose();
                router.refresh();
            } else {
                const errorMessage = (await response.json()).error;

                setSubmitError(errorMessage);
            }
        } catch (error) {
            console.error(error);

            setSubmitError(error instanceof Error ? error.message : "Une erreur s'est produite lors de la création de la campagne");
        }
    }

    return (
        <form onSubmit={handleCreateCampaign} className={styles.createCampaignForm}>
            <FormInput
                id="campaignName"
                type="text"
                label="Nom de la campagne"
                value={campaignName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCampaignName(e.target.value)}
            />

            <p className={styles.information}>Vous pourrez modifier les détails de votre campagne
                après sa création.</p>

            {submitError && <p className={styles.error}>{submitError}</p>}

            <div className={styles.buttonsContainer}>
                <Button type="submit" variant="primary" className="px-4 py-2">
                    Créer la campagne
                </Button>

                <Button variant="outline" className="px-4 py-2" onClick={handleClose}>
                    Annuler
                </Button>
            </div>
        </form>
    );

};

export default CreateCampaignForm;