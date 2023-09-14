import { useGlobal } from "@/store/global/useGlobal";
import { UserProfileData } from "@/types/pages";

interface UserProfileProps {
  profileData?: UserProfileData;
}

const UserProfile = ({ profileData }: UserProfileProps) => {
  const { colorShades, darkMode } = useGlobal();

  return (
    <div
      className="dark:bg-darkCard border dark:border-slate-800 border-zinc-400 mt-10 w-full m-auto sm:w-[80%] md:w-[70%] lg:w-[50%] h-[11rem] rounded-md"
      style={{
        boxShadow: darkMode
          ? `1px 1px 2px 0 ${colorShades}`
          : `4px 4px 2px 2px ${colorShades}`,
      }}
    >
      <div
        className="h-[2rem] mt-4 text-center text-lightText text-xl font-semibold dark:font-normal"
        style={{ color: colorShades }}
      >
        Completion Status -{" "}
        <span className="text-lg font-semibold">
          {profileData?.totalSolved}/{profileData?.total}
        </span>
      </div>
      <div className="flex items-center justify-between h-[8rem] px-8 w-full md:w-[80%] m-auto">
        {/* easy */}
        <div className="relative ml-4 md:ml-0 flex flex-col items-center justify-center">
          <div className="dark:text-lightText text-darkText text-xl">
            {profileData?.easySolved}/{profileData?.easyTotal}
          </div>
          <div className="dark:text-lightText text-darkText text-2xl">Easy</div>
          <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-lime-600"></div>
        </div>
        {/* medium */}
        <div className="relative ml-4 md:ml-0 flex flex-col items-center justify-center">
          <div className="dark:text-lightText text-darkText text-xl">
            {profileData?.mediumSolved}/{profileData?.mediumTotal}
          </div>
          <div className="dark:text-lightText text-darkText text-2xl">
            Medium
          </div>
          <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-yellow-600"></div>
        </div>
        {/* hard */}
        <div className="relative ml-4 md:ml-0 flex flex-col items-center justify-center">
          <div className="dark:text-lightText text-darkText text-xl">
            {profileData?.hardSolved}/{profileData?.hardTotal}
          </div>
          <div className="dark:text-lightText text-darkText text-2xl">Hard</div>
          <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-red-700"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
