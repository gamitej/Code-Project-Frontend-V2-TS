import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// comp
import { Page } from "@/components";
import Questions from "./Questions";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
// services
import { getSelectedTopicData } from "@/services";
//  utils types
import topicName from "@/utils/nameMapping.json";
import { SelectedTopicData, TopicName } from "@/types/pages";

const Topic = () => {
  const { topic } = useParams();
  const { colorShades } = useGlobal();
  const { userInfo } = useAuth();

  const topicDisplayName = topic as keyof TopicName;

  // ==== API CALL'S ====

  const API_DATA = { ...userInfo, topic: topic || "" };
  const {
    data: selectedTopicData = [],
    isLoading,
    error,
  } = useQuery<SelectedTopicData[], Error>({
    queryKey: ["selectedTopic", API_DATA],
    queryFn: () => getSelectedTopicData(API_DATA),
  });

  /**
   * TSX
   */
  return (
    <Page loading={isLoading} error={error}>
      {/* head section */}
      <div className="flex flex-col justify-center items-center gap-y-4 mt-10">
        <h3
          className="RISE capitalize"
          style={{ color: colorShades, fontSize: "2.3rem" }}
        >
          {topicDisplayName ? topicName[topicDisplayName] : ""}
        </h3>
      </div>
      {/* question display section */}
      <div className="grid grid-cols-6 gap-x-6 gap-y-8 mt-16">
        {selectedTopicData?.map((items: SelectedTopicData, idx: number) => (
          <Questions key={idx} {...items} />
        ))}
      </div>
    </Page>
  );
};

export default Topic;
