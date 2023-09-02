import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// store
import { useGlobal } from "@/store/global/useGlobal";
import { Page } from "@/components";
// services
import { getSelectedTopicData } from "@/services";
//  utils types
import { SelectedTopicData, TopicName } from "@/types/pages";
import topicName from "@/utils/nameMapping.json";
import Questions from "./Questions";

const Topic = () => {
  const { topic } = useParams();
  const { colorShades } = useGlobal();

  const topicDisplayName = topic as keyof TopicName;

  // ==== API CALL ====

  const { data: selectedTopicData = [], isLoading } = useQuery({
    queryFn: () => getSelectedTopicData(topic || ""),
    queryKey: ["selectedTopic"],
  });

  /**
   * TSX
   */
  return (
    <Page loading={isLoading} clsName="mt-10">
      {/* head section */}
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h3
          className="RISE capitalize"
          style={{ color: colorShades, fontSize: "2.3rem" }}
        >
          {topicDisplayName ? topicName[topicDisplayName] : ""}
        </h3>
      </div>
      {/* question display section */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-8 mt-16">
        {selectedTopicData?.map((items: SelectedTopicData, idx: number) => (
          <Questions key={idx} {...items} />
        ))}
      </div>
    </Page>
  );
};

export default Topic;
