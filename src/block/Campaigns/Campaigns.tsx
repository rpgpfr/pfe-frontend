"use client";

import {useEffect, useState} from "react";

import {CampaignCard, Pagination, SearchBar} from "@/components";
import {Button} from "@/components/ui";
import {fakeCampaigns} from "@/app/campaigns/mock";

import styles from "./Campaigns.module.css";

type SortType = "alphabetique" | "date";

const Campaigns = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState<SortType>("alphabetique");
    const [filteredCampaigns, setFilteredCampaigns] = useState<typeof fakeCampaigns>([]);

    const campaignsPerPage = 10;
    const indexOfLastCampaign = currentPage * campaignsPerPage;
    const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
    const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);
    const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage);

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
    }, [searchTerm, sortType]);

    return (
        <>
            <div className={styles.actionBar}>
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

            <div className={styles.campaignsContainer}>
                <div className={styles.campaigns}>
                    {
                        currentCampaigns.map((campaign, index) => (
                            <CampaignCard
                                key={index}
                                id={campaign.id}
                                name={campaign.name}
                                image={campaign.image}
                                createdAt={campaign.createdAt}
                                showDate={true}
                            />
                        ))
                    }
                </div>

                {
                    filteredCampaigns.length === 0 &&
                    <div className={styles.noResults}>
                        <p className="text-gray-500">Aucune campagne ne correspond à votre recherche.</p>
                    </div>
                }

                {
                    totalPages > 0 &&
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
                }
            </div>
        </>
    );

};

export default Campaigns;