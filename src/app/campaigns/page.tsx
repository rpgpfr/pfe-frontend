"use client";

import {useEffect, useState} from "react";

import {Button, Section} from "@/components/ui";
import {CampaignCard, Pagination, SearchBar} from "@/components";

import "./animations.css";
import {fakeCampaigns} from "@/app/campaigns/mock";

type SortType = "alphabetique" | "date";

export default function CampaignsPage() {

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState<SortType>("alphabetique");
    const [filteredCampaigns, setFilteredCampaigns] = useState(fakeCampaigns);
    const [animateCards, setAnimateCards] = useState(false);

    const campaignsPerPage = 10;

    useEffect(() => {
        const sorted = fakeCampaigns.sort((a, b) => {
            if (sortType === "alphabetique") {
                return a.name.localeCompare(b.name, "fr", {sensitivity: "base"});
            } else {
                return b.createdAt.getTime() - a.createdAt.getTime();
            }
        })

        const filtered = sorted.filter((campaign) =>
            campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredCampaigns(filtered);
        setCurrentPage(1);
        setAnimateCards(false);
        setTimeout(() => setAnimateCards(true), 10);
    }, [searchTerm, sortType]);

    useEffect(() => {
        setAnimateCards(false);
        setTimeout(() => setAnimateCards(true), 10);
    }, [currentPage]);

    const indexOfLastCampaign = currentPage * campaignsPerPage;
    const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
    const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);
    const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage);

    return (
        <div>
            <Section pattern="dice">
                <h1 className="font-aladdin text-3xl text-center relative z-10">
                    Alors, on repart de zéro ou on charge une campagne existante ?
                </h1>
            </Section>

            <div className="border-b border-gray-200 w-full">
                <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        sortType={sortType}
                        onSortChange={setSortType}
                    />

                    <Button variant="primary" className="px-4 py-2">
                        + Créer une campagne
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-8 mb-24">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
                    {
                        currentCampaigns.map((campaign, index) => (
                            <div
                                key={campaign.id}
                                className={`campaign-card w-full ${animateCards ? "animate-in" : ""}`}
                                style={{animationDelay: `${index * 50}ms`}}
                            >
                                <CampaignCard
                                    name={campaign.name}
                                    image={campaign.image}
                                    createdAt={campaign.createdAt}
                                    showDate={true}
                                />
                            </div>
                        ))
                    }
                </div>

                {
                    filteredCampaigns.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">Aucune campagne ne correspond à votre recherche.</p>
                        </div>
                    )
                }

                {
                    totalPages > 0 &&
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
                }
            </div>
        </div>
    )
}

