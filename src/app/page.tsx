import {CampaignDemo, Hero, Presentation, UsecaseDemo, WorldDemo} from "@/block/Home";

const Home = () => {

    return (
        <main className="flex flex-col min-h-screen">
            <Hero/>
            <Presentation/>
            <CampaignDemo/>
            <WorldDemo/>
            <UsecaseDemo/>
        </main>
    );

};

export default Home;
