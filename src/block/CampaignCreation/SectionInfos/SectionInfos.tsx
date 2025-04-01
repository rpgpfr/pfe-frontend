"use client"

import {ChangeEvent, FormEvent, useState} from "react";
import {Drawer, Button, FormInput, LabelContent, SectionCampaign} from "@/components/";
import {infoSchema} from "@/lib/schemas"

const SectionInfos = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [formData, setFormData] = useState({
        type: "",
        ambiance: "",
        description: "",
    })

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

    const validateForm = () => {
        const validation = infoSchema.safeParse(formData);
        return validation.success;
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('test');
            handleClose();
        }
    };

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }


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
                            onChange={handleFormChange}
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