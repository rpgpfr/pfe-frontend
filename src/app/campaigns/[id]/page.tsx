import Sidebar from "@/components/Sidebar/Sidebar";

const CampaignPage = async ({params} : {params : Promise<{id:bigint}>}) => {

    const {id} = await params;

    return (
        <div>
            <Sidebar activePage={"campaigns"}/>
        </div>
    );
};

export default CampaignPage;