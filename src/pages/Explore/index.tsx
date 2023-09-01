import { Page } from "@/components";
import ExploreContent from "./ExploreContent";
import { useQuery } from "@tanstack/react-query";
import { getExploreTopices } from "@/services";
import { ExploreTopicsData } from "@/types/pages";

const Explore = () => {
  const {
    data: exploreData = {},
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getExploreTopices(),
    queryKey: ["explore"],
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
          <h3 className="text-white font-semibold text-2xl">Explore</h3>
          {onGoingTopic && (
            <p className="text-white capitalize">
              In progress topic - {onGoingTopic.data}
            </p>
          )}
        </div>
        {/* CONTENT */}
        <div className="grid grid-cols-12 gap-8">
          {topicsData?.map((items: ExploreTopicsData, idx: number) => (
            <ExploreContent key={idx} {...items} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Explore;
