import Sidebar from "@/components/Sidebar/Sidebar";
import {aladin} from "@/lib/utils";
import SectionInfos from "@/block/CampaignCreation/SectionInfos/SectionInfos";
import SectionQuest from "@/block/CampaignCreation/SectionQuest/SectionQuest";
import SectionMap from "@/block/CampaignCreation/SectionMap/SectionMap";
import SectionCharacters from "@/block/CampaignCreation/SectionCharacters/SectionCharacters";
import styles from './campaign.module.css'
import CircularProgress from "@/components/CircularProgress/CircularProgress";

const CampaignPage = async ({params}: { params: Promise<{ id: bigint }> }) => {

    const {id} = await params;

    return (
        <div className={styles.container}>
            <Sidebar activePage={"campaigns"}/>
            <div className={styles.campaign}>
                <div className={styles.banner}>
                    <img className={styles.bannerImg} src={'/images/placeholder.png'}
                         alt="Campaign"/>
                </div>
                <div className={styles.header}>
                    <h1 className={`${aladin.className} text-h2`}>Nom de campagne</h1>
                    <div className={styles.progress}>
                        <span><strong>encore 1 étape</strong> pour que la campagne soit jouable !</span>
                        <CircularProgress value={2} maxValue={4}/>
                    </div>

                </div>
                <div className={styles.infos}>
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