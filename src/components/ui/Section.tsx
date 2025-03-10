import type React from "react"

interface SectionProps {
    children: React.ReactNode
    title?: string
    className?: string
    pattern?: "dice" | "sword" | "checkerboard" | "none"
    fullHeight?: boolean
}

export default function Section({
                                    children,
                                    title,
                                    className = "",
                                    pattern = "none",
                                    fullHeight = false,
                                }: SectionProps) {
    const patternClasses = {
        dice: "dice-pattern",
        sword: "sword-pattern",
        checkerboard: "checkerboard-pattern",
        none: "",
    }

    return (
        <section className={`py-12 px-4 relative ${fullHeight ? "h-screen" : ""} ${className}`}>
            {pattern !== "none" && <div className={`absolute inset-0 z-0 ${patternClasses[pattern]}`}></div>}

            <div className="max-w-6xl mx-auto w-full relative z-10">
                {title && <h2 className="font-aladdin text-3xl text-center mb-10">{title}</h2>}

                {children}
            </div>
        </section>
    )
}

