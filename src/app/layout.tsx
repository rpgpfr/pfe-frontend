import {ReactNode} from "react";
import type {Metadata} from "next";
import {Source_Sans_3} from "next/font/google";
import {SessionProvider} from "next-auth/react";

import {Footer, Header} from "@/block";
import {GSAPWrapper} from "@/components";


import "./globals.css";

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "RPGine",
    description: "Créez votre univers de jeu de rôle",
}

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="fr">
        <SessionProvider>
            <body className={`${sourceSans.className}`}>
            <Header/>
            <GSAPWrapper>
                {children}
            </GSAPWrapper>
            <Footer/>
            </body>
        </SessionProvider>
        </html>
    )
}

