import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm, Form } from "../components/useForm";

const initialFValues = {
  id: 0,
  fullName: "",
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
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            variant="outlined"
            label="Email name"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            variant="outlined"
            label="Phone number"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
      </Grid>
    </Form>
  );
}

export default CustomerForm;
