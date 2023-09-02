import config from "@/services/config";
import http from "@/services/httpServices/httpServices";

const endpoint: string = config.baseUrl;

interface MarkQuestion {
  question_id: string;
  topic: string;
  id: string;
  token: string;
}

// ====== EXPLORE ALL TOPICS =========
export async function getExploreTopices(id: string, token: string) {
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
  const { data } = await http.get(
    `${endpoint}/selected_topic?id=${id}&topic=${topic}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data.data;
}

// ====== MARK QUESTIONS DONE/NOT-DONE FOR A TOPIC =========

export async function markQuestion({
  id,
  token,
  question_id,
  topic,
}: MarkQuestion) {
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
