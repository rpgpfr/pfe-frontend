import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import {aladin} from "@/lib/utils";
import SectionCampaign from "@/components/SectionCampaign/SectionCampaign";
import {LabelContent} from "@/components/ui/LabelContent/LabelContent";
import SectionInfos from "@/block/CampaignCreation/SectionInfos/SectionInfos";
import SectionQuest from "@/block/CampaignCreation/SectionQuest/SectionQuest";

const CampaignPage = async ({params} : {params : Promise<{id:bigint}>}) => {

    const {id} = await params;

    return (
        <div className="flex">
            <Sidebar activePage={"campaigns"}/>
            <div className={"flex flex-col w-full"}>
                <div className="h-[290px] w-full">
                    <img className="h-full w-full object-cover object-center" src={'/images/placeholder.png'}
                         alt="Campaign"/>
                </div>
                <div className="m-[18px]">
                    <h1 className={`${aladin.className} text-h2`}>Nom de campagne</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 m-[18px]">
                    <SectionInfos/>
                    <SectionQuest/>
                    <SectionCampaign title={"Carte utilisée dans la campagne"}>
                        <LabelContent label={"Ambiance du monde"} content={"Ambiance du monde"}/>
                        <LabelContent label={"Type de monde"} content={"Contenu"}/>
                        <LabelContent label={"Description du monde"} content={"Contenu"}
                                      className={'flex flex-col !items-start'}/>
                    </SectionCampaign>
                    <SectionCampaign title={"Personnages assignés"}>
                        <LabelContent label={"Ambiance du monde"} content={"Ambiance du monde"}/>
                        <LabelContent label={"Type de monde"} content={"Contenu"}/>
                        <LabelContent label={"Description du monde"} content={"Contenu"}
                                      className={'flex flex-col !items-start'}/>
                    </SectionCampaign>
                </div>

            </div>
        </div>
    );
};

export default CampaignPage;