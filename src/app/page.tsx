import {CampaignDemo, Hero, Presentation, UsecaseDemo, WorldDemo} from "@/block/Home";

const Home = () => {

    return (
        <main className="flex flex-col min-h-screen">
            <Hero/>
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
