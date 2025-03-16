import type React from "react";

import {cn} from "@/lib/utils";

import styles from "./Section.module.css";

interface SectionProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    pattern?: "dice" | "sword" | "checkerboard" | "none";
    fullHeight?: boolean;
}

const patternClasses = {
    dice: "dice-pattern",
    sword: "sword-pattern",
    checkerboard: "checkerboard-pattern",
    none: "",
};

const Section = ({children, title, className, pattern, fullHeight}: SectionProps) => {

    const sectionClasses = cn(
        styles.section,
        fullHeight && styles.fullHeight,
        className
    );

    const backgroundClasses = cn(
        styles.background,
        (pattern && pattern !== "none") && patternClasses[pattern]
    )

    return (
        <section className={sectionClasses}>
            {
                pattern && pattern !== "none" &&
                <div className={backgroundClasses}></div>
            }

            <div className={styles.content}>
                {title && <h2 className={styles.title}>{title}</h2>}

                {children}
            </div>
        </section>
    );

};

export default Section;