import { Page } from "@/components";
import { getUserPrfoileData } from "@/services";
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
import { UserProfileData } from "@/types/pages";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { userInfo } = useAuth();
  const { colorShades } = useGlobal();

  // API CALL'S

  const {
    data: profileData,
    isLoading: isPDLoading,
    error: isPDError,
  } = useQuery<UserProfileData | undefined, Error>({
    queryFn: () => getUserPrfoileData(),
    queryKey: ["profile"],
  });

  /**
   * TSX
   */
  return (
    <Page loading={isPDLoading} error={isPDError}>
      <div className="flex flex-col justify-center items-center gap-y-4">
        {/* head */}
        <div className="mt-5">
          <h3
            className="RISE"
            style={{ color: colorShades, fontSize: "2.1rem" }}
          >
            {userInfo.name}
          </h3>
        </div>

        <div
          className="bg-modal mt-10 w-full m-auto sm:w-[80%] md:w-[70%] lg:w-[50%] h-[11rem] rounded-md"
          style={{ boxShadow: `1px 1px 2px 0 ${colorShades}` }}
        >
          <div
            className="h-[2rem] mt-4 text-center text-lightText text-xl"
            style={{ color: colorShades, fontWeight: 500 }}
          >
            Total Completion -{" "}
            <span className="text-lg">
              {profileData?.totalSolved}/{profileData?.total}
            </span>
          </div>
          <div className="flex items-center justify-between h-[8rem] px-8">
            {/* easy */}
            <div className="relative ml-2 flex flex-col items-center justify-center">
              <div className="text-lightText text-xl">
                {profileData?.easySolved}/{profileData?.easyTotal}
              </div>
              <div className="text-lightText text-2xl">Easy</div>
              <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-lime-600"></div>
            </div>
            {/* medium */}
            <div className="relative ml-2 flex flex-col items-center justify-center">
              <div className="text-lightText text-xl">
                {profileData?.mediumSolved}/{profileData?.mediumTotal}
              </div>
              <div className="text-lightText text-2xl">Medium</div>
              <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-yellow-600"></div>
            </div>
            {/* hard */}
            <div className="relative ml-2 flex flex-col items-center justify-center">
              <div className="text-lightText text-xl">
                {profileData?.hardSolved}/{profileData?.hardTotal}
              </div>
              <div className="text-lightText text-2xl">Hard</div>
              <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-red-700"></div>
            </div>
          </div>
        </div>

        {/* history table*/}
        <div></div>
      </div>
    </Page>
  );
};

export default Profile;
