"use client"

import { useState } from "react";
import {Drawer, Button, FormInput, LabelContent, SectionCampaign} from "@/components/";

const SectionInfos = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const fields = [
        { id: 'type', label: 'Type de monde', content: 'Contenu' },
        { id: 'ambiance', label: 'Ambiance', content: 'Ambiance du monde' },
        { id: 'description', label: 'Description du monde', content: 'Contenu', className: 'flex flex-col !items-start' }
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
            <SectionCampaign title="Informations générales" onClick={handleEdit}>
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
                title="Informations générales"
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
                        Enregistrer les informations
                    </Button>
                </form>
            </Drawer>
        </div>
    );
};

export default SectionInfos;