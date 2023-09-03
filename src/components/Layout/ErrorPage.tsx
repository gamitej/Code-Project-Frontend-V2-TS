import { useGlobal } from "@/store/global/useGlobal";

const ErrorPage = ({ errorRes }: { errorRes: Error | null | undefined }) => {
  const { colorShades } = useGlobal();

  return (
    <div className="flex flex-col justify-center items-center gap-y-2 h-[calc(100vh-5rem)]">
      <p style={{ color: colorShades }} className="text-2xl">
        {errorRes ? errorRes?.message : "Something went wrong"}
      </p>
    </div>
  );
};

export default ErrorPage;
