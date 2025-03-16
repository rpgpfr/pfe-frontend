"use client";

import {ChevronLeft, ChevronRight} from "lucide-react";

import {IconButton} from "@/components/ui";
import {cn} from "@/lib/utils";

import styles from "./Pagination.module.css";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {

    if (totalPages <= 1) {
        return <></>;
    }

    return (
        <div className={styles.container}>
            <IconButton
                icon={ChevronLeft}
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                variant="outline"
                aria-label="Page précédente"
                className={cn(currentPage === 1 && styles.disabled)}
            />

            {
                Array.from({length: totalPages}, (_, pageNumber) => pageNumber + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={cn(styles.pageButton, currentPage === pageNumber && styles.activePage)}
                    >
                        {pageNumber}
                    </button>
                ))
            }

            <IconButton
                icon={ChevronRight}
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                variant="outline"
                aria-label="Page suivante"
                className={cn(currentPage === totalPages && styles.disabled)}
            />
        </div>
    );

};

export default Pagination;