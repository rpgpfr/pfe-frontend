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

const Section = (props: SectionProps) => {

    const sectionClasses = cn(
        styles.section,
        props.fullHeight && styles.fullHeight,
        props.className
    );

    const backgroundClasses = cn(
        styles.background,
        (props.pattern && props.pattern !== "none") && patternClasses[props.pattern]
    )

    return (
        <section className={sectionClasses}>
            {
                props && props.pattern !== "none" &&
                <div className={backgroundClasses}></div>
            }

            <div className={styles.content}>
                {props.title && <h2 className={styles.title}>{props.title}</h2>}

                {props.children}
            </div>
        </section>
    );

};

export default Section;