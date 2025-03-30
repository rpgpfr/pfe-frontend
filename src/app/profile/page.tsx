import Profile from "@/block/Profile/Profile";
import Banner from "@/components/Banner/Banner";
import LastActivitiesProfile from "@/components/LastActivitiesProfile/LastActivitiesProfile";
import {redirect} from "next/navigation";
import {headers} from "next/headers";

const ProfilePage = async () => {

    const profile = await getUserProfile();

    return (
        <main>
            <Banner/>
            <div className="flex w-screen gap-2 pl-5 pr-5 pt-5 pb-5">
                <div className="w-1/2 p-1">
                    <Profile profile={profile} />
                </div>

                <div className="w-1/2 p-1">
                    <LastActivitiesProfile activites={[]}/>
                </div>
            </div>
        </main>
    );
};

const getUserProfile = async () => {
    try {
        const options = {
            method: "GET",
            ...await headers()
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/profile`, options);

        if (!response.ok) {
            const errorMessage = (await response.json()).error;

            redirect("/profile/error?error=" + encodeURI(errorMessage));
        }

        return await response.json();
    } catch (error) {
        console.error(error);

        redirect("/error");
    }
};

export default ProfilePage;