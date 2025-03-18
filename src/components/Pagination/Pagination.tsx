"use client"

import {ChevronLeft, ChevronRight} from "lucide-react"
import IconButton from "@/components/ui/IconButton"
import styles from "./Pagination.module.css"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    if (totalPages <= 1) return null

    return (
        <div className={styles.container}>
            <IconButton
                icon={ChevronLeft}
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                variant="outline"
                ariaLabel="Page précédente"
                className={currentPage === 1 ? styles.disabled : ""}
            />

            {Array.from({length: totalPages}, (_, i) => i + 1).map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`${styles.pageButton} ${currentPage === number ? styles.activePage : ""}`}
                >
                    {number}
                </button>
            ))}

            <IconButton
                icon={ChevronRight}
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                variant="outline"
                ariaLabel="Page suivante"
                className={currentPage === totalPages ? styles.disabled : ""}
            />
        </div>
    )
}