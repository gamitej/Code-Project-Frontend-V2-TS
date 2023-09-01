import { useGlobal } from "@/store/global/useGlobal";
import { ButtonProps, CircularProgress } from "@mui/material";

interface LoadingButtonProps extends Omit<ButtonProps, "size"> {
  loadingSize?: number;
  isLoading?: boolean;
  clsName?: string;
  label?: string;
  type?: "submit";
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loadingSize = 15,
  isLoading = false,
  type = "submit",
  clsName = "",
  label = "",
}) => {
  const { colorShades } = useGlobal();

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${clsName}  w-[75%] py-2 rounded-sm`}
      style={{ backgroundColor: colorShades }}
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
