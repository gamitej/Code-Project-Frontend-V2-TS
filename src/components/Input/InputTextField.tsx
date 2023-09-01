import { TextField, TextFieldProps } from "@mui/material";

interface InputTextFieldProps extends Omit<TextFieldProps, "size"> {
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

const InputTextField = ({
  value = "",
  width = "80%",
  size = "medium",
  name = "username",
  label = "Username",
  variant = "outlined",
  onChange = () => {},
  required = true,
  type = "text",
  minLength = 4,
  maxLength = 50,
  placeholder,
  ...restProps
}: InputTextFieldProps) => {
  return (
    <TextField
      type={type}
      size={size}
      value={value}
      id={name}
      placeholder={placeholder}
      name={name}
      label={label}
      variant={variant}
      onChange={onChange}
      sx={{
        width,
        borderRadius: ".25rem",
        backgroundColor: "#D1D6D8",
        color: "whitesmoke",
      }}
      required={required}
      spellCheck={false}
      autoComplete="off"
      inputProps={{ minLength, maxLength }}
      {...restProps}
    />
  );
};

export default InputTextField;
