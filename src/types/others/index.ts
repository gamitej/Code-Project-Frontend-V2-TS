import { ButtonProps, TextFieldProps } from "@mui/material";

// =========== input properties =========
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
// ============ loading ==============
export interface loadingButtonProps extends Omit<ButtonProps, "size"> {
  loadingSize?: number;
  isLoading?: boolean;
  clsName?: string;
  label?: string;
  type?: "submit";
}

// ============= dropdwon ==============

type dropDownOptions = {
  id: string | number;
  label: string;
  value: string;
};

export interface dropDownProps {
  label: string;
  value: string;
  name: string;
  width: number | string;
  options: dropDownOptions[];
  size: "small" | "medium";
  onChange: (target: { value: string; name: string }) => void;
}
