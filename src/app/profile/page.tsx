import Profile from "@/block/Profile/Profile";
import LastActivitiesProfile from "@/components/LastActivitiesProfile/LastActivitiesProfile";

const ProfilePage = () => {
  return (
    <main>
      <div className="flex w-screen h-screen border-2 gap-2">
        <div className="w-1/2 h-full border-2 p-1">
          <Profile />
        </div>

        <div className="w-1/2 h-full border-2 p-1">
          <LastActivitiesProfile activites={[]} />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;