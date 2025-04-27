"use client";

import {FC, useState} from "react";

import {CampaignSection, Drawer, LabelContent, MainQuestForm} from "@/components";
import {Quest} from "rpg-project/campaign";
import {Separator} from "@/components/ui";
import {clsx} from "clsx";

interface MainQuestCardProps {
    quest: Quest;
    slug: string;
}

const MainQuestCard: FC<MainQuestCardProps> = ({quest, slug}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleEdit = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <CampaignSection title="Quête principale de la campagne" onClick={toggleEdit}>
                <LabelContent
                    id="title-content"
                    label="Titre"
                    content={quest.title || ""}
                />

                <LabelContent
                    id="description-content"
                    label="Description"
                    content={quest.description || ""}
                    className="flex flex-col !items-start"
                />

                <Separator>
                    <p>Objectifs</p>
                </Separator>

                {
                    quest.goals?.map((goal, index) => {
                            const goalContent = goal.completed ? "Terminé" : "Non terminé";

                            return (
                                <LabelContent
                                    key={`goal-${index}`}
                                    id={`goal-${index}`}
                                    label={goal.name}
                                    content={goalContent}
                                />
                            );
                        }
                    )
                }
            </CampaignSection>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={toggleEdit}
                title="Quête principale de la campagne"
            >
                <MainQuestForm handleClose={toggleEdit} quest={quest} slug={slug}/>
            </Drawer>
        </div>
    );
};

export default MainQuestCard;
