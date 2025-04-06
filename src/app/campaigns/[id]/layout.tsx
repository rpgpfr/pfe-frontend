import {Sidebar} from "@/components";

export default function CampaignLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar activePage={"campaigns"}/>
            {children}
        </div>
    )
}