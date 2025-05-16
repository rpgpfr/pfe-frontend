"use client";

import {FC, useState} from "react";

import {CampaignInfoForm, Card, Drawer, LabelContent} from "@/components";
import {Info} from "rpg-project/campaign";

interface InfoCardProps {
    info: Info;
    slug: string;
}

const InfoCard: FC<InfoCardProps> = ({info, slug}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleEdit = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <Card title="Informations générales" onClick={toggleEdit}>
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

                <LabelContent
                    id="description-content"
                    label="Description"
                    content={info.description || ""}
                    className="flex flex-col !items-start"
                />

            </Card>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={toggleEdit}
                title="Informations générales"
            >
                <CampaignInfoForm handleClose={toggleEdit} info={info} slug={slug}/>
            </Drawer>
        </div>
    );
};

export default InfoCard;