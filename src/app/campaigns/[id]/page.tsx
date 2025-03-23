import Sidebar from "@/components/Sidebar/Sidebar";
import {aladin} from "@/lib/utils";
import SectionInfos from "@/block/CampaignCreation/SectionInfos/SectionInfos";
import SectionQuest from "@/block/CampaignCreation/SectionQuest/SectionQuest";
import SectionMap from "@/block/CampaignCreation/SectionMap/SectionMap";
import SectionCharacters from "@/block/CampaignCreation/SectionCharacters/SectionCharacters";

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
                    <SectionMap/>
                    <SectionCharacters/>
                </div>

            </div>
        </div>
    );
};

export default CampaignPage;