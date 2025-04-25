"use client";

import {ChangeEvent, FormEvent, useState} from "react";

import {CampaignSection, Drawer, LabelContent} from "@/components";
import {Button, FormInput} from "@/components/ui";

const MainQuestCard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [formData, setFormData] = useState({
        titre: "",
        description: "",
        objectifs: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const fields = [
        {id: 'titre', label: 'Titre', content: 'Contenu'},
        {id: 'description', label: 'Description du monde', content: 'Contenu', className: 'flex flex-col !items-start'},
        {id: 'objectifs', label: 'Objectifs', content: 'Contenu', className: 'flex flex-col !items-start'},
    ];

    const handleEdit = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    const validateForm = () => {
        setErrors({});
        return true;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Formulaire valide :", formData);
            handleClose();
        }
    };

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };

    return (
        <div>
            <CampaignSection title="Quête principale de la campagne" onClick={handleEdit}>
                {fields.map((field) => (
                    <LabelContent
                        key={field.id}
                        label={field.label}
                        content={field.content}
                        className={field.className}
                    />
                ))}
            </CampaignSection>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleClose}
                title="Quête principale de la campagne"
            >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <div key={field.id}>
                            <FormInput
                                id={field.id}
                                label={field.label}
                                onChange={handleFormChange}
                            />
                            {errors[field.id] && <p className="text-red-500">{errors[field.id]}</p>}
                        </div>
                    ))}
                    <Button variant="primary" type="submit" className="px-4 py-2">
                        Enregistrer la quête
                    </Button>
                </form>
            </Drawer>
        </div>
    );
};

export default MainQuestCard;
