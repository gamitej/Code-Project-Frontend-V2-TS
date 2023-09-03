import config from "@/services/config";
import http from "@/services/httpServices/httpServices";

const endpoint: string = config.baseUrl;

export interface UserInfoApiData {
  id: string;
  token: string;
}

// ====== EXPLORE ALL TOPICS =========
export async function getExploreTopices({ id, token }: UserInfoApiData) {
  const { data } = await http.get(`${endpoint}/topics?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}

// ====== SELECTED TOPIC QUESTIONS =========

interface SelectedTopicData extends UserInfoApiData {
  topic: string;
}

export async function getSelectedTopicData({
  id,
  token,
  topic,
}: SelectedTopicData) {
  const { data } = await http.get(
    `${endpoint}/selected_topic?id=${id}&topic=${topic}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data.data;
}

// ====== MARK QUESTIONS DONE/NOT-DONE FOR A TOPIC =========

interface MarkQuestion extends UserInfoApiData {
  questionId: string;
  topic: string | undefined;
}

export async function markQuestion({
  id,
  token,
  questionId,
  topic,
}: MarkQuestion) {
  const apiData = {
    user_id: id,
    question_id: questionId,
    topic,
  };
  const { data } = await http.post(`${endpoint}/markQuestion`, apiData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
