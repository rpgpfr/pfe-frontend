"use client"

import { useState } from "react";
import SectionCampaign from "@/components/SectionCampaign/SectionCampaign";
import { LabelContent } from "@/components/LabelContent/LabelContent";
import Drawer from "@/components/Drawer/Drawer";
import { Button } from "@/components/ui";
import FormInput from "@/components/ui/FormInput/FormInput";

const SectionMap = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


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
            <SectionCampaign title="Carte utilisée dans la campagne"  onClick={handleEdit}>
                <img className={'h-[290px] w-full object-cover'} src={'/images/placeholder.png'} alt="Carte de la campagne"/>
            </SectionCampaign>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleClose}
                title="Carte utilisée dans la campagne"
            >

            </Drawer>
        </div>
    );
};

export default SectionMap;