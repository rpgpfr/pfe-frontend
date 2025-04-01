import {aladin} from "@/lib/utils";
import styles from './campaign.module.css'
import {CircularProgress, Sidebar} from "@/components";
import {SectionInfos, SectionCharacters, SectionQuest, SectionMap} from "@/block"
import Image from "next/image";

const CampaignPage = async () => {

    return (
        <div className={styles.container}>
            <Sidebar activePage={"campaigns"}/>
            <div className={styles.campaign}>
                <div className={styles.banner}>
                    <Image fill className={styles.bannerImg} src={'/images/placeholder.png'}
                         alt="Campaign"/>
                </div>
                <div className={styles.header}>
                    <h1 className={`${aladin.className} text-h2`}>Nom de campagne</h1>
                    <div className={styles.progress}>
                        <span><strong>encore 1 étape</strong> pour que la campagne soit jouable !</span>
                        <CircularProgress value={2} maxValue={6}/>
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