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
    description: "Gérez vos campagnes, personnages, cartes et ressources pour vos jeux de rôle. Une interface simple pour organiser tout votre univers RPG",
};

export default function RootLayout({children}: { children: ReactNode }) {
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

