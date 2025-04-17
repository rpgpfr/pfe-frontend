import {Section} from "@/components/ui";
import {Campaigns} from "@/block";
import {aladin} from "@/lib/utils";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {Campaign} from "api";

const CampaignsPage = async () => {

    const campaigns: Campaign[] = await getCampaigns();

    return (
        <main className="flex-grow">
            <Section pattern="dice">
                <h1 className={`${aladin.className} text-3xl text-center relative z-10`}>
                    Alors, on repart de zéro ou on charge une campagne existante ?
                </h1>
            </Section>

            <Campaigns campaigns={campaigns} />
        </main>
    );

};

const getCampaigns = async (): Promise<Campaign[]> => {
    try {
        const options = {
            method: "GET",
            ...await headers()
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/campaigns`, options);

        if (!response.ok) {
            console.error((await response.json()).error);

            redirect("/error");
        }

        return await response.json();
    } catch (error) {
        console.error(error);

        redirect("/error");
    }
}

export default CampaignsPage;