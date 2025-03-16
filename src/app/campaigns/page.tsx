import {Section} from "@/components/ui";
import Campaigns from "@/block/Campaigns/Campaigns";

export default function CampaignsPage() {

    return (
        <div>
            <Section pattern="dice">
                <h1 className="font-aladdin text-3xl text-center relative z-10">
                    Alors, on repart de zéro ou on charge une campagne existante ?
                </h1>
            </Section>

            <Campaigns/>
        </div>
    )
}

