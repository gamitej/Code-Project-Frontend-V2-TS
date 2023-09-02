import config from "@/services/config";
import { getIdToken } from "@/services/httpServices/errorHandler";
import http from "@/services/httpServices/httpServices";

const endpoint: string = config.baseUrl;

// GET TABLE DATA
export async function getAllQuestionsUserData() {
  const { id, token } = getIdToken();

  const { data } = await http.get(`${endpoint}/profile/table_data?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data.rows;
}

// GET USER STATUS DATA
export async function getUserPrfoileData() {
  const { id, token } = getIdToken();
  const { data } = await http.get(`${endpoint}/profile/user_status?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}
