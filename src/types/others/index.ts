import { ButtonProps, TextFieldProps } from "@mui/material";

export interface inputFieldPasswordProps {
  name: string;
  value: string;
  width?: string;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export interface inputTextFieldProps extends Omit<TextFieldProps, "size"> {
  value?: string;
  width?: string;
  size?: "small" | "medium";
  name?: string;
  label?: string;
  variant?: "standard" | "filled" | "outlined";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

export interface loadingButtonProps extends Omit<ButtonProps, "size"> {
  btnSize?: "small" | "medium" | "large"; // Correctly typing btnSize
  loadingSize?: number;
  isLoading?: boolean;
  clsName?: string;
  label?: string;
  sx?: any;
}
