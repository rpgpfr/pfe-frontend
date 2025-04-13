
import {ProfileBanner, ProfileInfo} from "@/block";
import {LastActivities} from "@/components";
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
                    <ProfileInfo profile={profile} />
                </div>

                <div className={styles.column}>
                    <LastActivities activities={[]}/>
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