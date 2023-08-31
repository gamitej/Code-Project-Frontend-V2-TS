import { loadingButtonProps } from "@/types/others";
import { CircularProgress } from "@mui/material";

const LoadingButton: React.FC<loadingButtonProps> = ({
  loadingSize = 15,
  isLoading = false,
  type = "submit",
  clsName = "",
  label = "",
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${clsName} bg-green w-[75%] py-2 rounded-sm`}
    >
      <span className="flex justify-center items-center gap-2">
        <CircularProgress
          size={loadingSize}
          className="text-md"
          sx={{
            color: "black",
            fontSize: "6px",
            display: isLoading ? "" : "none",
          }}
        />
        {label}
      </span>
    </button>
  );
};

export default LoadingButton;
