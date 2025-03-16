import type React from "react"
import type {Metadata} from "next"
import {Aladin as Aladdin, Source_Sans_3} from "next/font/google"
import {SessionProvider} from "next-auth/react";

import "./globals.css"
import {GSAPWrapper} from "@/components";

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
        <SessionProvider>
            <body>
            <GSAPWrapper>
                {children}
            </GSAPWrapper>
            </body>
        </SessionProvider>
        </html>
    )
}

