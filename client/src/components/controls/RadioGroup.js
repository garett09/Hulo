import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from "@mui/material";

export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel> {label} </FormLabel>
      <MuiRadioGroup
        row={true}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
