import config from "@/services/config";
import { ErrorHandlerApi } from "@/services/httpServices/errorHandler";
import http from "@/services/httpServices/httpServices";

const endpoint = config.baseUrl;

export async function LoginApi(req: any) {
  try {
    const { data } = await http.post(`${endpoint}/login`, req);
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}

export async function SignUpApi(req: any) {
  try {
    const { data } = await http.post(`${endpoint}/v1/register`, req);
    return data;
  } catch (error) {
    return ErrorHandlerApi(error);
  }
}
