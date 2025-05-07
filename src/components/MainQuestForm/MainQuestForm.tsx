"use client";

import {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState} from "react";
import {useRouter} from "next/navigation";
import {Plus} from "lucide-react";

import {Button, FormInput, GoalInput, Separator} from "@/components/ui";
import {Goal, Quest} from "rpg-project/campaign";

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
        goals: quest.goals
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
                    goals: formData.goals
                })
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns/${slug}/mainQuest`, options);

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

            {
                <Separator>
                    <p>Objectifs</p>
                </Separator>
            }

            <GoalInputs formData={formData} setFormData={setFormData}/>

            <Separator/>

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

interface GoalInputsProps {
    formData: {
        title: string;
        description: string;
        goals: Goal[];
    };
    setFormData: Dispatch<SetStateAction<{
        title: string
        description: string
        goals: Goal[]
    }>>
}

const GoalInputs: FC<GoalInputsProps> = ({formData, setFormData}) => {

    const handleAdd = () => {
        const newGoal = {
            name: "",
            completed: false
        };

        setFormData({
            ...formData,
            goals: [...formData.goals, newGoal]
        });
    }

    const handleDelete = (goal: Goal) => {
        const updatedGoals = formData.goals.filter(g => g !== goal);

        setFormData({
            ...formData,
            goals: updatedGoals
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedGoals = [...formData.goals];

        if (event.target.type === "text") {
            updatedGoals[index].name = event.target.value;
        } else {
            updatedGoals[index].completed = event.target.checked;
        }

        setFormData({
            ...formData,
            goals: updatedGoals
        });
    };

    return (
        <>
            {
                formData.goals.map((goal, index) => {
                    return (
                        <GoalInput key={index} goal={goal} index={index} handleChange={handleChange}
                                   handleDelete={handleDelete}/>
                    )
                })
            }

            <Button variant="primary" className="w-full flex justify-center py-2" onClick={handleAdd}>
                <Plus/>
            </Button>
        </>
    );

};

export default MainQuestForm;