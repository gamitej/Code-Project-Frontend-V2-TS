import { Backdrop, CircularProgress } from "@mui/material";

interface FullScreenLoaderProps {
  title: string;
  open: boolean;
  handleClose: () => void;
}

const FullScreenLoader = ({
  title = "loading",
  open = false,
  handleClose = () => {},
}: FullScreenLoaderProps) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <div className="flex flex-col justify-center items-center gap-y-2 h-[60vh]">
        <CircularProgress color="inherit" />
        <p className="font-semibold text-white font-sans">{title}...</p>
      </div>
    </Backdrop>
  );
};

export default FullScreenLoader;
