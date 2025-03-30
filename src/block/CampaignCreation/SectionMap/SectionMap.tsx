"use client"

import { useState } from "react";
import { Drawer, SectionCampaign, TabItem, TabList } from "@/components";

const SectionMap = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const handleEdit = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    // const handleSubmit = () => {
    //     handleClose();
    // };

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
                <TabList>
                    <TabItem key={1} label={'Vos cartes'}>
                        <div className={'flex flex-col gap-4 p-[18px]'}>

                        </div>
                    </TabItem>
                    <TabItem key={2} label={'Cartes par défaut'}>
                        <div className={'flex flex-col gap-4 p-[18px]'}>

                        </div>
                    </TabItem>
                </TabList>

            </Drawer>
        </div>
    );
};

export default SectionMap;