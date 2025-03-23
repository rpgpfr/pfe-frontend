'use client'
import SectionCampaign from "@/components/SectionCampaign/SectionCampaign";
import {ImageContentCard} from "@/components/ui/ImageContentCard/ImageContentCard";
import Drawer from "@/components/Drawer/Drawer";
import {useState} from "react";


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
            </Drawer>

        </SectionCampaign>
    )
}

export default SectionCharacters;