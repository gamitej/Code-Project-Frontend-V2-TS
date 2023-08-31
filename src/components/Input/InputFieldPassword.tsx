import React from "react";
import { inputFieldPasswordProps } from "@/types/others";
// mui comp
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// mui icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function InputFieldPassword({
  width = "80%",
  onChange = () => {},
  value = "",
  name = "password",
  placeholder = "Enter your password",
  minLength = 4,
  maxLength = 8,
  label = "Password",
}: inputFieldPasswordProps) {
  // =========== USE_STATE HOOK ===============
  const [showPassword, setShowPassword] = React.useState(false);

  // =========== EVENT HANDLERS ===============
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width,
        backgroundColor: "#D1D6D8",
        borderRadius: ".25rem",
      }}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">{label} *</InputLabel>
      <OutlinedInput
        id={name}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputProps={{ minLength, maxLength }}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        required
      />
    </FormControl>
  );
}

export default InputFieldPassword;
