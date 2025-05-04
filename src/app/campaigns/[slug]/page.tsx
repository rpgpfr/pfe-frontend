import Image from "next/image";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

import {aladin} from "@/lib/utils";
import {CircularProgress} from "@/components";
import {CharactersCard, InfoCard, MainQuestCard, MapsCard} from "@/block/Campaign";
import {Campaign} from "rpg-project/campaign";

import styles from './campaign.module.css'

const CampaignPage = async ({params}: { params: Promise<{ slug: string }> }) => {

    const {slug} = await params;
    const campaign: Campaign = await getCampaign(slug);

    return (
        <main className={styles.campaign}>
            <div className={styles.banner}>
                <Image fill className={styles.bannerImg} src={'/images/placeholder.png'}
                       alt="Campaign"/>
            </div>
            <div className={styles.header}>
                <h1 className={`${aladin.className} text-h2`}>{campaign.name}</h1>
                <div className={styles.progress}>
                    <span><strong>encore 1 étape</strong> pour que la campagne soit jouable !</span>
                    <CircularProgress value={2} maxValue={6}/>
                </div>

            </div>
            <div className={styles.infos}>
                <InfoCard info={campaign.info!} slug={slug}/>
                <MainQuestCard quest={campaign.mainQuest!} slug={slug}/>
                <MapsCard/>
                <CharactersCard/>
            </div>
        </main>

    );
};

const getCampaign = async (slug: string): Promise<Campaign> => {
    try {
        const options = {
            method: "GET",
            ...await headers()
        };

        const response = await fetch(`/api/campaigns/${slug}`, options);

        if (!response.ok) {
            console.error((await response.json()).error);

            redirect("/error");
        }

        return (await response.json()) satisfies Campaign;
    } catch (error) {
        console.error(error);

        redirect("/error");
    }
};

export default CampaignPage;