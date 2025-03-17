import Hero from "@/block/hero/Hero";
import Presentation from "@/block/presentation/presentation";
import HomeCampaignDemo from "@/block/home_campaign_demo/home_campaign_demo";
import HomeWorldDemo from "@/block/home_world_demo/home_world_demo";
import HomeUseCaseDemo from "@/block/home_use_case_demo/home_use_case_demo";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Hero />
            </div>
                <Presentation />
                <HomeCampaignDemo />
                <HomeWorldDemo />
                <HomeUseCaseDemo />
        </div>
    );
};

export default Home;