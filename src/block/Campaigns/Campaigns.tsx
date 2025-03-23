"use client";

import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

import {CampaignCard, Pagination, SearchBar} from "@/components";
import {Button} from "@/components/ui";
import {fakeCampaigns} from "@/app/campaigns/mock";

import styles from "./Campaigns.module.css";
import TweenTarget = gsap.TweenTarget;
import Drawer from "@/components/Drawer/Drawer";

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [campaignName, setCampaignName] = useState("")

    const campaignsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(campaignsRef.current?.children as TweenTarget, {autoAlpha: 0, y: 20});

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

    const handleCreateCampaign = async (e: React.FormEvent) => {
        e.preventDefault()

    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            <section className={styles.actionBar}>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    sortType={sortType}
                    onSortChange={setSortType}
                />

                <Button variant="primary" className="px-4 py-2" onClick={() => setIsDrawerOpen(true)}>
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

                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}
                        title="Créer une nouvelle campagne">
                    <div className="space-y-6">
                        <form onSubmit={handleCreateCampaign} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="campaignName"
                                       className="block text-sm font-medium text-gray-700 font-aladdin">
                                    Nom de la campagne
                                </label>
                                <input
                                    id="campaignName"
                                    type="text"
                                    value={campaignName}
                                    onChange={(e) => setCampaignName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-green focus:border-primary-green"
                                    placeholder="Entrez le nom de votre campagne"
                                    autoFocus
                                />
                            </div>

                            <p className="text-sm text-gray-500">Vous pourrez modifier les détails de votre campagne
                                après sa création.</p>

                            <div className="flex justify-end gap-4 mt-8">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleCloseDrawer}
                                    className="px-4 py-2"
                                    // disabled={isSubmitting}
                                >
                                    Annuler
                                </Button>
                                <Button type="submit" variant="primary" className="px-4 py-2"
                                    // disabled={isSubmitting}
                                >
                                    {/*{isSubmitting ? "Création en cours..." : "Créer la campagne"}*/}
                                    Créer la campagne
                                </Button>
                            </div>
                        </form>
                    </div>
                </Drawer>
            </section>

        </>
    );

};

export default Campaigns;