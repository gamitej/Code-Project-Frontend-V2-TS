import { Page } from "@/components";
import ExploreContent from "./ExploreContent";
import { useQuery } from "@tanstack/react-query";
import { getExploreTopices } from "@/services";

const Explore = () => {
  const {
    data: exploreData = [],
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getExploreTopices(),
    queryKey: ["explore"],
    onError: (err: Error) => {
      console.error(err);
    },
  });

  const { data: topicsData = [] } = exploreData;

  console.log(topicsData);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div className="text-white">Error Occurred</div>;
  /**
   * TSX
   */
  return (
    <Page>
      <div className="flex flex-col gap-y-16 justify-center">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3 className="text-white">Explore</h3>
          <p className="text-white">ongoing</p>
        </div>
        {/* CONTENT */}
        {/* {topicsData?.map(())} */}
        <ExploreContent />
      </div>
    </Page>
  );
};

export default Explore;
