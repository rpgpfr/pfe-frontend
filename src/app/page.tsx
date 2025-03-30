"use client";
import Hero from "@/block/Home/Hero/Hero";
import Presentation from "@/block/Home/Presentation/Presentation";
import CampaignDemo from "@/block/Home/CampaignDemo/CampaignDemo";
import HomeWorldDemo from "@/block/Home/WorldDemo/WorldDemo";
import UsecaseDemo from "@/block/Home/UsecaseDemo/UsecaseDemo";
import {useSession} from "next-auth/react";

const Home = () => {

    return (
        <main className="flex flex-col min-h-screen">
            <Hero/>
            <Presentation/>
            <CampaignDemo/>
            <HomeWorldDemo/>
            <UsecaseDemo/>
        </main>
    );
    
};

export default Home;
