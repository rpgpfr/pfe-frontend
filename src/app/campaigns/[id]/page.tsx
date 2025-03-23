import Sidebar from "@/components/Sidebar/Sidebar";
import {aladin} from "@/lib/utils";
import SectionInfos from "@/block/CampaignCreation/SectionInfos/SectionInfos";
import SectionQuest from "@/block/CampaignCreation/SectionQuest/SectionQuest";
import SectionMap from "@/block/CampaignCreation/SectionMap/SectionMap";
import SectionCharacters from "@/block/CampaignCreation/SectionCharacters/SectionCharacters";
import styles from './campaign.module.css'

const CampaignPage = async ({params} : {params : Promise<{id:bigint}>}) => {

    const {id} = await params;

    return (
        <div className={styles.container}>
            <Sidebar activePage={"campaigns"}/>
            <div className={styles.campaign}>
                <div className={styles.banner}>
                    <img className={styles.bannerImg} src={'/images/placeholder.png'}
                         alt="Campaign"/>
                </div>
                <div className={styles.containerTitle}>
                    <h1 className={`${aladin.className} text-h2`}>Nom de campagne</h1>
                </div>
                <div className={styles.containerInfos}>
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