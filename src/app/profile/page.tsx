import Profile from "@/block/Profile/Profile";
import Banner from "@/components/Banner/Banner";
import LastActivitiesProfile from "@/components/LastActivitiesProfile/LastActivitiesProfile";
const ProfilePage = () => {
  return (
    <main>
      <Banner />
      <div className="flex w-screen gap-2 pl-5 pr-5 pt-5 pb-5">
        <div className="w-1/2 p-1">
          <Profile />
        </div>

        <div className="w-1/2 p-1">
          <LastActivitiesProfile activites={[]} />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;