import {
  FormControl,
  InputLabel,
  FormLabel,
  MenuItem,
  FormHelperText,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

export default function Select(props) {
  const { name, label, value, error=null, onChange, options } = props;

  return (
    <FormControl variant="outlined"
      {...(error && {error:true})}>
      <FormLabel>{label}</FormLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
