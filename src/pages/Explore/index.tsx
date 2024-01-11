import { useQuery } from "@tanstack/react-query";
// comp
import { Page } from "@/components";
import ExploreContent from "./ExploreContent";
// services
import { getExploreTopices } from "@/services";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
// type
import topicName from "@/utils/nameMapping.json";
import { ExploreTopicsData, TopicName } from "@/types/pages";

const Explore = () => {
  const { colorShades } = useGlobal();
  const { userInfo } = useAuth();

  // ============= API CALL'S ==============
  const {
    data: exploreData = {},
    isLoading,
    error,
    isError,
  } = useQuery({
    queryFn: () => getExploreTopices(userInfo),
    queryKey: ["explore", userInfo],
    onError: (err: Error) => {
      console.error(err);
    },
  });

  const { data: topicsData = [], onGoingTopic = {} } = exploreData;

  // type definded for topic name mapping
  const topicDisplayName = onGoingTopic.data as keyof TopicName;

  /**
   * TSX
   */
  return (
    <Page loading={isLoading} error={isError} errorRes={error}>
      <div className="flex flex-col gap-y-16 justify-center">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3
            className="RISE font-semibold dark:font-normal"
            style={{ color: colorShades, fontSize: "2.3rem" }}
          >
            Explore
          </h3>

          {onGoingTopic && (
            <p className="dark:text-lightText text-darkText font-semibold dark:font-medium text-lg capitalize">
              In progress topic -{" "}
              {topicDisplayName ? topicName[topicDisplayName] : ""}
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
