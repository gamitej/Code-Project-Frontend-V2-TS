const errorResponse = { message: "", error: true };

export function ErrorHandlerApi(error: any) {
  console.log(error);

  errorResponse.error = true;

  if (error.code === "ERR_NETWORK") {
    errorResponse.message = "Network error";

    console.log(errorResponse);

    return errorResponse;
  }
  const { response } = error;
  return response.data;
}
