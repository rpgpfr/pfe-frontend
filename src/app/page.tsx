import {CampaignDemo, Hero, Presentation, UsecaseDemo, WorldDemo} from "@/block/Home";
import {ComingSoon} from "@/components";

const Home = () => {

    return (
        <main className="flex flex-col min-h-screen">
            <Hero/>
            <ComingSoon/>
            <Presentation/>
            <div className="mx-[8%]">
            <CampaignDemo/>
            <WorldDemo/>
            <UsecaseDemo/>
            </div>
        </main>
    );

};

export default Home;
