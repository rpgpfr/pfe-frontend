"use client";

import {useState} from "react";

import {Card, Drawer, TabItem, TabList} from "@/components";
import Image from "next/image";

const MapsCard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const handleEdit = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };


    return (
        <div>
            <Card title="Carte utilisée dans la campagne" onClick={handleEdit}>
                <Image className={'h-[290px] w-full object-cover'} src={'/images/placeholder.png'}
                     alt="Carte de la campagne"/>
            </Card>

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

export default MapsCard;