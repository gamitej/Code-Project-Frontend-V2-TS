import { useGlobal } from "@/store/global/useGlobal";
import { CircularProgress } from "@mui/material";

const FullScreenLoader = () => {
  const { colorShades } = useGlobal();

  return (
    <div className="flex flex-col justify-center items-center gap-y-2 h-[calc(100vh-5rem)]">
      <CircularProgress style={{ color: colorShades }} />
    </div>
  );
};

export default FullScreenLoader;
