"use client"

import { useState } from "react";
import { Button, Drawer, FormInput, LabelContent, SectionCampaign } from "@/components";
const SectionQuest = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const fields = [
        { id: 'titre', label: 'Titre', content: 'Contenu' },
        { id: 'description', label: 'Description du monde', content: 'Contenu', className: 'flex flex-col !items-start'},
        { id: 'objectifs', label: 'Objectifs', content: 'Contenu', className: 'flex flex-col !items-start' },
    ];

    const handleEdit = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    const handleSubmit = () => {
        handleClose();
    };

    return (
        <div>
            <SectionCampaign title="Quête principale de la campagne" onClick={handleEdit}>
                {fields.map((field) => (
                    <LabelContent
                        key={field.id}
                        label={field.label}
                        content={field.content}
                        className={field.className}
                    />
                ))}
            </SectionCampaign>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleClose}
                title="Quête principale de la campagne"
            >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <FormInput
                            key={field.id}
                            id={field.id}
                            label={field.label}
                        />
                    ))}
                    <Button variant="primary" type="submit" className="px-4 py-2">
                        Enregistrer la quête
                    </Button>
                </form>
            </Drawer>
        </div>
    );
};

export default SectionQuest;