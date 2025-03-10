import Header from "@/block/header/Header";
import Footer from "@/block/footer/Footer";
import Hero from "@/block/hero/Hero";
import Presentation from "@/block/presentation/presentation";
import CampaignCreator from "@/block/campaign-creator/campaign-creator";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Hero />
            </div>
            <div>
                <Presentation />
            </div>
            <div>
                <CampaignCreator />
            </div>
            <Footer />
        </div>
    );
};

export default Home;