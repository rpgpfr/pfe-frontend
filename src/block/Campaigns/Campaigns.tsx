"use client";

import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import TweenTarget = gsap.TweenTarget;

import {CampaignCard, Pagination, SearchBar} from "@/components";
import {Button} from "@/components/ui";
import {fakeCampaigns} from "@/app/campaigns/mock";

import styles from "./Campaigns.module.css";

type SortType = "alphabetique" | "date";

const Campaigns = () => {

    const campaigns = fakeCampaigns;
    const campaignsPerPage = 10;

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState<SortType>("alphabetique");
    const [filteredCampaigns, setFilteredCampaigns] = useState<typeof fakeCampaigns>(campaigns);
    const [currentCampaigns, setCurrentCampaigns] = useState<typeof fakeCampaigns>([]);
    const [totalPages, setTotalPages] = useState(0);

    const campaignsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(campaignsRef.current?.children as TweenTarget, { autoAlpha: 0, y: 20 });

        gsap.to("*", {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            stagger: {
                amount: currentCampaigns.length * 0.1,
            },
        })
    }, {
        scope: campaignsRef,
        dependencies: [currentCampaigns, searchTerm]
    })

    useEffect(() => {
        const sorted = campaigns.sort((a, b) => {
            if (sortType === "alphabetique") {
                return a.name.localeCompare(b.name, "fr", {sensitivity: "base"});
            } else {
                return b.createdAt.getTime() - a.createdAt.getTime();
            }
        });

        const filtered = sorted.filter((campaign) =>
            campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredCampaigns(filtered);
        setTotalPages(Math.ceil(filtered.length / campaignsPerPage));
        setCurrentPage(1);
    }, [campaigns, searchTerm, sortType]);

    useEffect(() => {
        const indexOfLastCampaign = currentPage * campaignsPerPage;
        const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
        const current = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);

        setCurrentCampaigns(current);
    }, [currentPage, filteredCampaigns]);

    return (
        <>
            <section className={styles.actionBar}>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    sortType={sortType}
                    onSortChange={setSortType}
                />

                <Button variant="primary" className="px-4 py-2">
                    + Créer une campagne
                </Button>
            </section>

            <section className={styles.campaignsContainer}>
                <div ref={campaignsRef} className={styles.campaigns}>
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
            </section>
        </>
    );

};

export default Campaigns;