import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3, Aladin as Aladdin } from "next/font/google"
import "./globals.css"
import Footer from "@/block/footer/Footer";
import Header from "@/block/header/Header";
const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-source-sans",
})

const aladdin = Aladdin({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-aladdin",
})

export const metadata: Metadata = {
    title: "Project RPG",
    description: "Créez votre univers de jeu de rôle",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${sourceSans.variable} ${aladdin.variable}`}>
            <body>
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    )
}

