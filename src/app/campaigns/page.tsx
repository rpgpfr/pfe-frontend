"use client"

import { useState, useEffect } from "react"
// import Layout from "@/components/layout/Layout"
import CampaignCard from "@/components/CampaignCard/CampaignCard"
import Pagination from "@/components/Pagination/Pagination"
import SearchBar from "@/components/SearchBar/SearchBar"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import "./animations.css"

const fakeCampaigns = [
    {
        id: 1,
        name: "Les Chroniques d'Eldoria",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-11-15"),
    },
    {
        id: 2,
        name: "La Quête des Dragons",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-12-20"),
    },
    {
        id: 3,
        name: "Les Mystères de Ravencliff",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-10-05"),
    },
    {
        id: 4,
        name: "L'Empire des Ombres",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2024-01-10"),
    },
    {
        id: 5,
        name: "Les Légendes de Sylvanor",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-09-30"),
    },
    {
        id: 6,
        name: "La Guerre des Royaumes",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2024-02-15"),
    },
    {
        id: 7,
        name: "Les Terres Oubliées",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-08-22"),
    },
    {
        id: 8,
        name: "Le Royaume de Crystalia",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2024-03-01"),
    },
    {
        id: 9,
        name: "Les Gardiens d'Azura",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-07-14"),
    },
    {
        id: 10,
        name: "La Prophétie des Anciens",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2024-01-25"),
    },
    {
        id: 11,
        name: "Les Ruines de Blackmoor",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2023-11-30"),
    },
    {
        id: 12,
        name: "Le Sanctuaire des Dragons",
        image: "/placeholder.svg?height=200&width=300",
        createdAt: new Date("2024-02-28"),
    },
]

type SortType = "alphabetique" | "date"

export default function CampaignsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [sortType, setSortType] = useState<SortType>("alphabetique")
    const [filteredCampaigns, setFilteredCampaigns] = useState(fakeCampaigns)
    const [animateCards, setAnimateCards] = useState(false)
    const campaignsPerPage = 10 // 2 lignes de 5 campagnes

    useEffect(() => {
        const sorted = [...fakeCampaigns].sort((a, b) => {
            if (sortType === "alphabetique") {
                return a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
            } else {
                return b.createdAt.getTime() - a.createdAt.getTime() // Du plus récent au plus ancien
            }
        })

        const filtered = sorted.filter((campaign) => campaign.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilteredCampaigns(filtered)
        setCurrentPage(1)

        setAnimateCards(false)
        setTimeout(() => setAnimateCards(true), 10)
    }, [searchTerm, sortType])

    useEffect(() => {
        setAnimateCards(false)
        setTimeout(() => setAnimateCards(true), 10)
    }, [currentPage])

    const indexOfLastCampaign = currentPage * campaignsPerPage
    const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage
    const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign)

    const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage)

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
                    {currentCampaigns.map((campaign, index) => (
                        <div
                            key={campaign.id}
                            className={`campaign-card w-full ${animateCards ? "animate-in" : ""}`}
                            style={{animationDelay: `${index * 50}ms`}}
                        >
                            <CampaignCard
                                id={campaign.id}
                                name={campaign.name}
                                image={campaign.image}
                                createdAt={campaign.createdAt}
                                showDate={false}
                            />
                        </div>
                    ))}
                </div>

                {filteredCampaigns.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Aucune campagne ne correspond à votre recherche.</p>
                    </div>
                )}

                {totalPages > 0 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
                )}
            </div>
        </div>
    )
}

