import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

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
  const classes = useStyle();

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="First name"
            value={values.firstName}
          ></TextField>
          <TextField
            variant="outlined"
            label="Email name"
            value={values.email}
          ></TextField>
        </Grid>
      </Grid>
    </form>
  );
}

export default CustomerForm;
