import { ButtonProps, TextFieldProps } from "@mui/material";

// =========== input properties =========
export interface InputFieldPasswordProps {
  name: string;
  value: string;
  width?: string;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export interface InputTextFieldProps extends Omit<TextFieldProps, "size"> {
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
// ============ button ==============
export interface LoadingButtonProps extends Omit<ButtonProps, "size"> {
  loadingSize?: number;
  isLoading?: boolean;
  clsName?: string;
  label?: string;
  type?: "submit";
}

// ============= dropdwon ==============

type DropDownOptions = {
  id: string | number;
  label: string;
  value: string;
};

export interface DropDownProps {
  label: string;
  value: string;
  name: string;
  width: number | string;
  options: DropDownOptions[];
  size: "small" | "medium";
  onChange: (target: { value: string; name: string }) => void;
}
