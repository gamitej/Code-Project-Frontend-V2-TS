import config from "@/services/config";
import http from "@/services/httpServices/httpServices";
import { UserInfoApiData } from "../Explore/exploreService";

const endpoint: string = config.baseUrl;

// GET TABLE DATA
export async function getAllQuestionsUserData({ id, token }: UserInfoApiData) {
  const { data } = await http.get(`${endpoint}/profile/table_data?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data.rows;
}

// GET USER STATUS DATA
export async function getUserProfileData({ id, token }: UserInfoApiData) {
  const { data } = await http.get(`${endpoint}/profile/user_status?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}
