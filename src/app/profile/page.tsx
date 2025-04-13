import Profile from "@/block/Profile/Profile";
import ProfileBanner from "@/components/Banner/ProfileBanner";
import LastActivitiesProfile from "@/components/LastActivitiesProfile/LastActivitiesProfile";
import {redirect} from "next/navigation";
import {headers} from "next/headers";

import styles from "./styles.module.css";

const ProfilePage = async () => {

    const profile = await getUserProfile();

    return (
        <main>
            <ProfileBanner/>
            <div className={styles.dashboard}>
                <div className={styles.column}>
                    <Profile profile={profile} />
                </div>

                <div className={styles.column}>
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
            console.log((await response.json()).error);

            redirect("/profile/error");
        }

        return await response.json();
    } catch (error) {
        console.error(error);

        redirect("/error");
    }
};

export default ProfilePage;