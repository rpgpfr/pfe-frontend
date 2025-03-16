import Header from "@/block/header/Header";
import Footer from "@/block/footer/Footer";
import Hero from "@/block/hero/Hero";
import Presentation from "@/block/presentation/presentation";
<<<<<<< HEAD
import CampaignCreator from "@/block/campaign-creator/campaign-creator";
=======
import SectionOne from "@/block/section_one/section_one";
import SectionTwo from "@/block/section_two/section_two";
import SectionThree from "@/block/section_three/section_three";
>>>>>>> 96f52365a33c5926dfff6e3eac921c938bfb91d8

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
<<<<<<< HEAD
=======
                <SectionOne />
            </div>
            <div>
                <SectionTwo />
            </div>
            <div>
                <SectionThree />
>>>>>>> 96f52365a33c5926dfff6e3eac921c938bfb91d8
            </div>
            <Footer />
        </div>
    );
};

export default Home;