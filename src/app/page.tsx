import Header from "@/block/header/Header";
import Footer from "@/block/footer/Footer";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
            </div>
            <Footer />
        </div>
    );
};

export default Home;