import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// comp
import { Page } from "@/components";
import Questions from "./Questions";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
// services
import { getSelectedTopicData, markQuestion } from "@/services";
//  utils types
import topicName from "@/utils/nameMapping.json";
import { SelectedTopicData, TopicName } from "@/types/pages";
import { toast } from "react-hot-toast";

const Topic = () => {
  const { topic } = useParams();
  const { colorShades } = useGlobal();
  const { userInfo } = useAuth();
  const queryClient = useQueryClient();

  const topicDisplayName = topic as keyof TopicName;

  // =================== API CALL'S ======================

  const markQuestionAsDoneMutation = (questionId: string) => {
    return markQuestion({ ...userInfo, questionId, topic });
  };

  // mark question as done / not-done
  const { mutate: markQuestionAsDone } = useMutation(
    markQuestionAsDoneMutation,
    {
      onSuccess: () => {
        toast.success("", { duration: 1200 });
        queryClient.invalidateQueries(["selectedTopic", API_DATA]);
      },
      onError: () => {
        toast.error("Something went wrong", { duration: 1300 });
      },
    }
  );

  const handleMarkAsDone = (questionId: string) => {
    markQuestionAsDone(questionId);
  };

  // get selected topic data
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
          <Questions key={idx} {...items} handleMarkAsDone={handleMarkAsDone} />
        ))}
      </div>
    </Page>
  );
};

export default Topic;
