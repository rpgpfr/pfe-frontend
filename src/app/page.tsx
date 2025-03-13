import Header from "@/block/header/Header";
import Footer from "@/block/footer/Footer";
import Hero from "@/block/hero/Hero";
import Presentation from "@/block/presentation/presentation";
import SectionOne from "@/block/section_one/section_one";
import SectionTwo from "@/block/section_two/section_two";
import SectionThree from "@/block/section_three/section_three";

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
                <SectionOne />
            </div>
            <div>
                <SectionTwo />
            </div>
            <div>
                <SectionThree />
            </div>
            <Footer />
        </div>
    );
};

export default Home;