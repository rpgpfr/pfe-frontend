import Image from "next/image";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

import {aladin, randomInt} from "@/lib/utils";
import {CircularProgress} from "@/components";
import {CharactersCard, InfoCard, MainQuestCard, MapsCard} from "@/block/Campaign";
import {Campaign} from "rpg-project/campaign";
import styles from './campaign.module.css'

const CampaignPage = async ({params}: { params: Promise<{ slug: string }> }) => {

    const {slug} = await params;

    let completedSteps = 0;
    const stepsToComplete = 5;

    const tips = [
        "Ajoutez une description à la campagne.",
        "Définissez le type de la campagne.",
        "Ajoutez une ambiance (mood) à la campagne.",
        "Ajoutez un titre à la quête principale.",
        "Ajoutez une description à la quête principale."
    ];

    const missingTips: string[] = [];

    const campaign: Campaign = await getCampaign(slug).then((data) => {
        if (data.info?.description) {
            completedSteps++;
        } else {
            missingTips.push(tips[0]);
        }

        if (data.info?.type) {
            completedSteps++;
        } else {
            missingTips.push(tips[1]);
        }

        if (data.info?.mood) {
            completedSteps++;
        } else {
            missingTips.push(tips[2]);
        }

        if (data.mainQuest?.title) {
            completedSteps++;
        } else {
            missingTips.push(tips[3]);
        }

        if (data.mainQuest?.description) {
            completedSteps++;
        } else {
            missingTips.push(tips[4]);
        }

        return data;
    });

    const remainingSteps = stepsToComplete - completedSteps;

    return (
        <main className={styles.campaign}>

            <div className={styles.banner}>
                <Image
                    src={`/images/campaign-${randomInt(1,6)}.webp`}
                    alt=""
                    fill
                    className={styles.bannerImg}
                /></div>

            <div className={styles.header}>
                <h1 className={`${aladin.className} text-h2`}>{campaign.name}</h1>
                <div className={styles.progress}>
                    {remainingSteps === 0 ? (
                        <span>
                            <strong>Campagne jouable !</strong>
                        </span>
                    ) : (
                        <span>
                            <strong>encore {remainingSteps} étape(s)</strong> pour que la campagne soit jouable ! <br/>
                            {remainingSteps > 0 && missingTips.length > 0 && (
                                <p className={styles.tip}>
                                    {missingTips[0]}
                                </p>
                            )}
                        </span>
                    )}
                    <CircularProgress value={completedSteps} maxValue={stepsToComplete}/>
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

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns/${slug}`, options);

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
