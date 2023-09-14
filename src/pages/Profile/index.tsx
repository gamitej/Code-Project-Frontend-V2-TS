import { useQuery } from "@tanstack/react-query";
// comp
import { Page } from "@/components";
import QuestionTable from "./QuestionTable";
// services
import { getAllQuestionsUserData, getUserPrfoileData } from "@/services";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
// type
import { QuestionsData, UserProfileData } from "@/types/pages";
import UserProfile from "./UserProfile";

const Profile = () => {
  const { userInfo } = useAuth();
  const { colorShades, darkMode } = useGlobal();

  // ========== API CALL'S ==============
  // user profile api call
  const {
    data: profileData,
    isLoading: isPDLoading,
    isError: isPDError,
    error: isPDerrorRes,
  } = useQuery<UserProfileData | undefined, Error>({
    queryFn: () => getUserPrfoileData(userInfo),
    queryKey: ["profile", userInfo],
    staleTime: 0,
  });

  // question data api call
  const {
    data: queData,
    isLoading: isQDLoading,
    isError: isQDError,
    // error: isQDErrorRes,
  } = useQuery<QuestionsData[], Error>({
    queryFn: () => getAllQuestionsUserData(userInfo),
    queryKey: ["Questions-data", userInfo],
    staleTime: 0,
  });

  /**
   * TSX
   */
  return (
    <Page
      loading={isPDLoading || isQDLoading}
      error={isPDError || isQDError}
      errorRes={isPDerrorRes}
    >
      <div className="flex flex-col justify-center items-center gap-y-4">
        {/* head */}
        <div className="mt-5">
          <p
            className="RISE capitalize font-semibold dark:font-normal"
            style={{ color: colorShades, fontSize: "2.1rem" }}
          >
            {userInfo.name}
          </p>
        </div>

        {/* user profile */}
        <UserProfile profileData={profileData} />

        {/* history table*/}
        <div
          className="w-full lg:w-[80%] m-auto h-[80vh] shadow-md rounded-md dark:bg-darkCard border 
          dark:border-slate-800
          border-zinc-400 px-4 py-2 mt-10"
          style={{
            boxShadow: darkMode
              ? `1px 1px 2px 0 ${colorShades}`
              : `4px 4px 2px 2px ${colorShades}`,
          }}
        >
          <QuestionTable questionsData={queData || []} />
        </div>
      </div>
    </Page>
  );
};

export default Profile;
