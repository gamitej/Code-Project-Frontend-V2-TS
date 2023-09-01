import config from "@/services/config";
import http from "@/services/httpServices/httpServices";
// import { ErrorHandlerApi } from "@/services/httpServices/errorHandler";
import { getSession } from "@/utils/session";
import { userSession } from "@/utils/nameMapping.json";

const endpoint: string = config.baseUrl;
// get details from session storage
const { id, token } = getSession(userSession) as { id: string; token: string };

export async function getExploreTopices() {
  const { data } = await http.get(`${endpoint}/topics?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
}
