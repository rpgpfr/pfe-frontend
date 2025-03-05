import Header from "@/block/header/Header";
import Footer from "@/block/footer/Footer";
import Hero from "@/block/hero/Hero";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Hero />
            </div>
            <Footer />
        </div>
    );
};

export default Home;