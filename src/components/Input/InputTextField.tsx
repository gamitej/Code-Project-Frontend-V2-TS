import { TextField } from "@mui/material";
import { colorShades } from "@/utils/theme";
import { inputTextFieldProps } from "@/types/others";

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
}: inputTextFieldProps) => {
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
        backgroundColor: colorShades.grey["700"],
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
