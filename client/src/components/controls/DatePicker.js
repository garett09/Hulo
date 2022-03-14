import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import { FormHelperText } from "@mui/material";

export default function DatePicker(props) {
  const { name, label, value, onChange, error = null } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      {...(error && { error: true })}
    >
      <KeyboardDatePicker
        disableToolbar
        variant="dialog"
        inputVariant="outlined"
        label={label}
        formate="MMM/dd/YYYY"
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        name={name}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </MuiPickersUtilsProvider>
  );
}
