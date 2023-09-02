import config from "@/services/config";
import http from "@/services/httpServices/httpServices";
import { getIdToken } from "@/services/httpServices/errorHandler";

const endpoint: string = config.baseUrl;

interface MarkQuestion {
  question_id: string;
  topic: string;
}

// ====== EXPLORE ALL TOPICS =========
export async function getExploreTopices(id: string, token: string) {
  // const { id, token } = getIdToken();
  const { data } = await http.get(`${endpoint}/topics?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}

// ====== SELECTED TOPIC QUESTIONS =========
export async function getSelectedTopicData(
  id: string,
  token: string,
  topic: string
) {
  // const { id, token } = getIdToken();

  const { data } = await http.get(
    `${endpoint}/selected_topic?id=${id}&topic=${topic}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data.data;
}

// ====== MARK QUESTIONS DONE/NOT-DONE FOR A TOPIC =========

export async function markQuestion({ question_id, topic }: MarkQuestion) {
  const { id, token } = getIdToken();
  const apiData = {
    user_id: id,
    question_id,
    topic,
  };
  const { data } = await http.post(`${endpoint}/markQuestion`, apiData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
