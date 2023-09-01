import { dropDownProps } from "@/types/others";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Dropdown = ({
  label,
  value,
  name = "",
  width = 120,
  options = [],
  size = "small",
  onChange = () => {},
}: dropDownProps) => {
  const handleChange = (e: SelectChangeEvent<string>, name: string) => {
    const value = e.target.value;
    const target = { value, name };
    onChange(target);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width }} size={size}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          id={name}
          value={value}
          label={label}
          onChange={(e) => handleChange(e, name)}
        >
          {options?.map(({ value, label, id }) => (
            <MenuItem key={id} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
