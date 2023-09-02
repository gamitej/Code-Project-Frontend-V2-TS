import { Page } from "@/components";
import ExploreContent from "./ExploreContent";
import { useQuery } from "@tanstack/react-query";
import { getExploreTopices } from "@/services";
import { ExploreTopicsData } from "@/types/pages";
import { useGlobal } from "@/store/global/useGlobal";
import { useAuth } from "@/store/auth/useAuth";

const Explore = () => {
  const { colorShades } = useGlobal();
  const { userInfo } = useAuth();

  // ============= API CALL'S ==============
  const {
    data: exploreData = {},
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getExploreTopices(userInfo.id, userInfo.token),
    queryKey: ["explore", userInfo.id, userInfo.token],
    onError: (err: Error) => {
      console.error(err);
    },
  });

  const { data: topicsData = [], onGoingTopic = {} } = exploreData;

  /**
   * TSX
   */
  return (
    <Page loading={isLoading} error={error}>
      <div className="flex flex-col gap-y-16 justify-center">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3
            className="RISE"
            style={{ color: colorShades, fontSize: "2.3rem" }}
          >
            Explore
          </h3>
          {onGoingTopic && (
            <p className="text-white capitalize">
              In progress topic - {onGoingTopic.data}
            </p>
          )}
        </div>
        {/* CONTENT */}
        <div className="grid grid-cols-12 gap-8">
          {topicsData?.map((items: ExploreTopicsData, idx: number) => (
            <ExploreContent key={idx} {...items} onGoingTopic={onGoingTopic} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Explore;
