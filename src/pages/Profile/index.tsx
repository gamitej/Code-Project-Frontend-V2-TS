import { Page } from "@/components";
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";

const Profile = () => {
  const { userInfo } = useAuth();
  const { colorShades } = useGlobal();
  return (
    <Page>
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
          <div className="h-[2rem] mt-4 text-center text-lightText text-xl">
            Total Completion - <span className="text-lg">38/247</span>
          </div>
          <div className="flex items-center justify-between h-[8rem] px-8">
            {/* easy */}
            <div className="relative ml-2 flex flex-col items-center justify-center">
              <div className="text-lightText text-xl">8/10</div>
              <div className="text-lightText text-2xl">Easy</div>
              <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-lime-600"></div>
            </div>
            {/* medium */}
            <div className="relative ml-2 flex flex-col items-center justify-center">
              <div className="text-lightText text-xl">8/10</div>
              <div className="text-lightText text-2xl">Medium</div>
              <div className="absolute top-0 -left-4 h-[3.5rem] w-[.3rem] bg-yellow-600"></div>
            </div>
            {/* hard */}
            <div className="relative ml-2 flex flex-col items-center justify-center">
              <div className="text-lightText text-xl">8/10</div>
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
