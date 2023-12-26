import { useGlobal } from "@/store/global/useGlobal";
import { useMemo } from "react";

const ErrorPage = ({ errorRes }: { errorRes: any }) => {
  const { colorShades } = useGlobal();

  const message = useMemo(() => {
    if (errorRes?.response) {
      return errorRes.response.data.message;
    }

    return errorRes?.message;
  }, [errorRes]);

  return (
    <div className="flex flex-col justify-center items-center gap-y-2 h-[calc(100vh-5rem)]">
      <p style={{ color: colorShades }} className="text-2xl">
        {message || "Something went wrong"}
      </p>
    </div>
  );
};

export default ErrorPage;
