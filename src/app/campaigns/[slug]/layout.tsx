import {ReactNode} from "react";

import {Sidebar} from "@/components";

export default function CampaignLayout({children}: { children: ReactNode }) {
    return (
        <div className="flex">
            <Sidebar activePage={"campaigns"}/>
            {children}
        </div>
    )
}