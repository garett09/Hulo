import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
const initialFValues = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  gender: "male",
  checkinDate: new Date(),
  checkoutDate: new Date(),
  villaType: "",
  adult: "",
  child: "",
};

function CustomerForm() {
  const [values, setValues] = useState(initialFValues);

  return (
    <form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
          variant = "outlined"
          label="First name"
          value={values.firstName}></TextField>
          <TextField
          variant = "outlined"
          label="Email name"
          value={values.email}></TextField>
          </Grid>
      </Grid>
    </form>
  );
}

export default CustomerForm;
