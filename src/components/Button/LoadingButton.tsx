import { loadingButtonProps } from "@/types/others";
import { Button, CircularProgress } from "@mui/material";

const LoadingButton: React.FC<loadingButtonProps> = ({
  btnSize = "large",
  loadingSize = 20,
  isLoading = false,
  variant = "contained",
  type = "submit",
  clsName = "",
  label = "",
  sx = {},
}) => {
  return (
    <Button
      type={type}
      size={btnSize} // Using btnSize here
      variant={variant}
      disabled={isLoading}
      startIcon={
        <CircularProgress
          size={loadingSize}
          className="text-md"
          sx={{
            color: "whitesmoke",
            fontSize: "6px",
            display: isLoading ? "" : "none",
          }}
        />
      }
      className={`${clsName}`}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default LoadingButton;
