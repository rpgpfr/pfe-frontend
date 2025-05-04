import {headers} from "next/headers";
import {redirect} from "next/navigation";

import {ProfileBanner, ProfileInfo} from "@/block/Profile";
import {LastActivities} from "@/components";
import {UserProfile} from "rpg-project";

import styles from "./styles.module.css";

const ProfilePage = async () => {

    const profile: UserProfile = await getUserProfile();

    return (
        <main>
            <ProfileBanner/>
            <div className={styles.dashboard}>
                <div className={styles.column}>
                    <ProfileInfo profile={profile}/>
                </div>

                <div className={styles.column}>
                    <LastActivities activities={[]}/>
                </div>
            </div>
        </main>
    );
};

const getUserProfile = async (): Promise<UserProfile> => {
    try {
        const options = {
            method: "GET",
            ...await headers()
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profile`, options);

        if (!response.ok) {
            console.error((await response.json()).error);

            redirect("/error");
        }

        return (await response.json()) satisfies UserProfile;
    } catch (error) {
        console.error(error);

        redirect("/error");
    }
};

export default ProfilePage;