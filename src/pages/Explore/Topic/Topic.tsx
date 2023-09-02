import { useGlobal } from "@/store/global/useGlobal";
import { useParams } from "react-router-dom";
import topicName from "@/utils/nameMapping.json";
import { Page } from "@/components";

// Define an interface for the topicName object
interface TopicName {
  userSession: string;
  colorSession: string;
  "tree-1": string;
  "tree-2": string;
  stack: string;
  arrays: string;
  strings: string;
  linkedlist: string;
  twoPointers: string;
  heap: string;
  binarySearch: string;
  "dp-1": string;
  "dp-2": string;
  slidingWindow: string;
  "": string;
}

const Topic = () => {
  const { colorShades } = useGlobal();
  const { topic } = useParams();

  const topicDisplayName = topic as keyof TopicName;

  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h3
          className="RISE capitalize"
          style={{ color: colorShades, fontSize: "2.3rem" }}
        >
          {topicDisplayName ? topicName[topicDisplayName] : ""}
        </h3>
      </div>
    </Page>
  );
};

export default Topic;
