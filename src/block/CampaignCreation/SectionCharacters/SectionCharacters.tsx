'use client'
import SectionCampaign from "@/components/SectionCampaign/SectionCampaign";
import {ImageContentCard} from "@/components/ImageContentCard/ImageContentCard";
import Drawer from "@/components/Drawer/Drawer";
import {useState} from "react";
import TabList from "@/components/Tabs/TabList/TabList";
import TabItem from "@/components/Tabs/TabItem/TabItem";
import Image from "next/image";
import {ImageActionCard} from "@/components/ImageActionCard/ImageActionCard";


const SectionCharacters = () => {

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
        <SectionCampaign title={"Personnages assignés"} onClick={handleEdit}>
            <div className={"h-full overflow-y-scroll w-full flex flex-col gap-4"}>
                <ImageContentCard imageSrc={'/images/placeholder.png'} content={'Test'} title={'Test'}/>
                <ImageContentCard imageSrc={'/images/placeholder.png'} content={'Test'} title={'Test'}/>
            </div>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleClose}
                title="Personnages assignés"
            >
                <div className={' border-lightGrey border rounded-default w-[900px]'}>
                    <TabList>
                        <TabItem key={1} label={'Vos personnages'}>
                            <div className={'flex flex-col gap-4 p-[18px]'}>
                                <ImageActionCard imageSrc={'/images/placeholder.png'} content={'test'}/>
                                <ImageActionCard imageSrc={'/images/placeholder.png'} content={'test'}/>
                            </div>
                        </TabItem>
                        <TabItem key={2} label={'Personnages par défaut'}>
                            <div className={'flex flex-col gap-4 p-[18px]'}>
                                <ImageActionCard imageSrc={'/images/placeholder.png'} content={'test'}/>
                            </div>
                        </TabItem>
                    </TabList>
                </div>


            </Drawer>

        </SectionCampaign>
    )
}

export default SectionCharacters;