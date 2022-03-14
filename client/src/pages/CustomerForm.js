import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useForm, Form } from "../components/useForm";
import { makeStyles } from "@material-ui/core";
import Controls from "../components/controls/Controls";
import * as customerService from "../services/customerService";
import * as titleService from "../services/titleService";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "others", title: "Others" },
];

const initialFValues = {
  id: 0,
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  gender: "male",
  checkinDate: new Date(),
  checkoutDate: new Date(),
  address: "",
  villaType: "None",
  adult: "",
  child: "",
};

function CustomerForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "First Name is required";
    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "Last name is required";
    if ("email" in fieldValues)
      temp.email = /.+@.+..+/.test(fieldValues.email) ? "" : "Email is not valid";
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "Title is required";
    if ("mobile" in fieldValues)
      temp.mobile =
      fieldValues.mobile.length > 10 ? "" : "Mobile number is not valid";
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "Address is required";
    if ("checkinDate" in fieldValues)
      temp.checkinDate = fieldValues.checkinDate ? "" : "Checkin date is required";
    if ("checkoutDate" in fieldValues)
      temp.checkoutDate = fieldValues.checkoutDate
        ? ""
        : "Checkout date is required";
    if ("villaType" in fieldValues)
      temp.villaType =
      fieldValues.villaType === "None" ? "This field is required" : "";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initialFValues, true, validate);

  const useStyle = makeStyles((theme) => ({
    typo: {
      flexGrow: 1,
      textAlign: "center",
    },
    typo1: {
      flexGrow: 1,
      textAlign: "left",
      paddingLeft: "46px",
    },
  }));
  const classes = useStyle();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Successfully sent to server");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Typography variant="h2" component="h2" className={classes.typo}>
          Customer Booking
        </Typography>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" className={classes.typo1}>
            Guest Information
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={4}>
            <Controls.Select
              name="title"
              autoWidth={false}
              label="Title"
              value={values.title}
              onChange={handleInputChange}
              options={titleService.getTitle()}
              error={errors.title}
            />
          </Grid>
          <Controls.Input
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          <Controls.Input
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
          <Grid item xs={12}>
            <FormControl>
              <Controls.RadioGroup
                row={true}
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="Others"
                />
              </Controls.RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Check-in date</FormLabel>
          </Grid>

          <Controls.DatePicker
            name="checkinDate"
            label="Check-in date"
            value={values.checkinDate}
            onChange={handleInputChange}
            error={errors.checkinDate}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="address"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}
          />
          <Controls.Input
            name="email"
            label="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Grid item xs={12}>
            <FormLabel>Check-out date</FormLabel>
            <Controls.DatePicker
              name="checkoutDate"
              label="Check-out date"
              value={values.checkoutDate}
              onChange={handleInputChange}
              error={errors.checkoutDate}
            />
          </Grid>
          <Controls.Select
            name="villaType"
            label="Villa"
            value={values.villaType}
            onChange={handleInputChange}
            options={customerService.getVillaType()}
            error={errors.villaType}
          />
        </Grid>

        <Controls.Button
          text="submit"
          type="submit"
          style={{
            marginLeft: "46px",
            borderRadius: 35,
            backgroundColor: "#73c2fd",
            padding: "12px 24px",
            fontSize: "12px",
          }}
        />
        <Controls.Button
          text="reset"
          type="reset"
          onClick={resetForm}
          style={{
            borderRadius: 35,
            backgroundColor: "#999999 ",
            padding: "12px 24px",
            fontSize: "12px",
          }}
        />
      </Grid>
    </Form>
  );
}

export default CustomerForm;
