"use client";

import {FC, useState} from "react";

import {CampaignInfoForm, CampaignSection, Drawer, LabelContent} from "@/components";
import {Info} from "rpg-project/campaign";

interface InfoCardProps {
    info: Info;
    slug: string;
}

const InfoCard: FC<InfoCardProps> = ({info, slug}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleEdit = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div>
            <CampaignSection title="Informations générales" onClick={handleEdit}>
                <LabelContent
                    id="description-content"
                    label="Description"
                    content={info.description || ""}
                />

                <LabelContent
                    id="type-content"
                    label="Type"
                    content={info.type || ""}
                />

                <LabelContent
                    id="mood-content"
                    label="Ambiance"
                    content={info.mood || ""}
                />
            </CampaignSection>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleClose}
                title="Informations générales"
            >
                <CampaignInfoForm handleClose={handleClose} info={info} slug={slug}/>
            </Drawer>
        </div>
    );
};

export default InfoCard;