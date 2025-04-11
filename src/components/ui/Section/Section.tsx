import {ReactNode} from "react";

import {cn} from "@/lib/utils";

import styles from "./Section.module.css";

interface SectionProps {
    children: ReactNode;
    title?: string;
    className?: string;
    pattern?: "dice" | "sword" | "checkerboard" | "none";
}

const patternClasses = {
    dice: "dice-pattern",
    sword: "sword-pattern",
    checkerboard: "checkerboard-pattern",
    none: "",
};

const Section = ({children, title, className, pattern}: SectionProps) => {

    const sectionClasses = cn(
        styles.section,
        "py-12 px-4 relative",
        className
    );

    const backgroundClasses = cn(
        "absolute inset-0 z-0",
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