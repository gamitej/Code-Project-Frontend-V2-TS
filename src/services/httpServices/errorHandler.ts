import { getSession } from "@/utils/session";
import { userSession } from "@/utils/nameMapping.json";

const errorResponse = { message: "", error: true };

export function ErrorHandlerApi(error: any) {
  errorResponse.error = true;
  // if netwrok error
  if (error.code === "ERR_NETWORK") {
    errorResponse.message = "Network error";
    return errorResponse;
  }
  const { response } = error;
  return response.data;
}

export function getIdToken() {
  const data = getSession(userSession) as {
    id: string;
    token: string;
  };
  return data;
}
