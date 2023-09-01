import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type DropDownOptions = {
  id: string | number;
  label: string;
  value: string;
};

interface DropDownProps {
  label: string;
  value: string;
  name: string;
  width: number | string;
  options: DropDownOptions[];
  size: "small" | "medium";
  onChange: (target: { value: string; name: string }) => void;
}

const Dropdown = ({
  label,
  value,
  name = "",
  width = 120,
  options = [],
  size = "small",
  onChange = () => {},
}: DropDownProps) => {
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
