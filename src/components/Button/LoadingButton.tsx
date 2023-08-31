import { Button, CircularProgress } from "@mui/material";
import { ButtonProps } from "@mui/material/Button"; // Import ButtonProps type

interface LoadingButtonProps extends Omit<ButtonProps, "size"> {
  btnSize?: "small" | "medium" | "large"; // Correctly typing btnSize
  loadingSize?: number;
  isLoading?: boolean;
  clsName?: string;
  label?: string;
  sx?: any;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
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
