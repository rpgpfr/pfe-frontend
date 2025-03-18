"use client";

import {useState} from "react";
import {Check, ChevronDown, Search} from "lucide-react";

import {TextField} from "@/components/ui";

import styles from "./SearchBar.module.css";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    sortType: "alphabetique" | "date";
    onSortChange: (type: "alphabetique" | "date") => void;
}

const SearchBar = ({searchTerm, onSearchChange, sortType, onSortChange}: SearchBarProps) => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className={styles.flexContainer}>
            <TextField
                type="search"
                placeholder="Rechercher"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                icon={<Search className={styles.icon}/>}
                className="flex-1"
            />

            <div className={styles.relativeContainer}>
                <button
                    className={styles.button}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                    {sortType === "alphabetique" ? "Alphabétique" : "Date de création"}
                    <ChevronDown className={styles.icon}/>
                </button>

                {
                    isFilterOpen &&
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownContent}>
                            <button
                                className={styles.dropdownButton}
                                onClick={() => {
                                    onSortChange("alphabetique");
                                    setIsFilterOpen(false);
                                }}
                            >
                                <span>Alphabétique</span>
                                {
                                    sortType === "alphabetique" && <Check className={styles.iconPrimaryGreen}/>
                                }
                            </button>
                            <button
                                className={styles.dropdownButton}
                                onClick={() => {
                                    onSortChange("date");
                                    setIsFilterOpen(false);
                                }}
                            >
                                <span>Date de création</span>
                                {
                                    sortType === "date" && <Check className={styles.iconPrimaryGreen}/>
                                }
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );

};

export default SearchBar;
