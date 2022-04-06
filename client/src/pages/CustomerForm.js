import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  Input,
  DatePicker,
  Button,
} from "@mui/material";

import { createForm, clearErrors } from "../actions/formAction";
import { getVillaDetails } from "../actions/villaAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function CustomerForm() {
  const [userInfo, setUserInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState([{
    villa: '',
    villaName: '',
  }]);

  const { getVilla, error } = useSelector((state) => state.getVilla);

  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const getVillaName = (villas, field) => {
    const val = getVilla.find((getVilla) => getVilla.villaName === villas);

    switch (field) {
      case "courseName":
        return val.villaName;
      default:
        return;
    }
  };

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

  useEffect(() => {
    dispatch(getVillaDetails());

    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
  }, [error, alert, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    let toAdd = [], toDrop = []

    const uniqueToAdd = [...new Map(toAdd.map(item => [item['courseCode'], item])).values()]
    const uniqueToDrop = [...new Map(toDrop.map(item => [item['courseCode'], item])).values()]

    setUserInfo({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      villa: fields.villa,
    });
  };
 

  const onChange = (index, e) => {
    e.preventDefault();

    const values = [...fields];

    values[index][e.target.name] = e.target.value;

    if (values[index]["villaName"] !== "") {
      values[index]["villa"] = getVillaName(values[index]["villaName"],"villaName");
    } else {
      values[index]["villaName"] = "";
    }
    setFields(values);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Grid>
        <Grid container>
          <Typography variant="h2" component="h2">
            Customer Booking
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>

        <Input
          type="text"
          name="firstName"
          label="first Name"
          value={user && user.firstName}
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name"
          value={user && user.lastName}
        />

        <Input
          type="text"
          name="email"
          label="email"
          value={user && user.email}
        />

        {fields.map((val, idx) => {
          //set unique id per row
          let villaName = `villaName-${idx}`

          return (
            <>
              <Select
                label="Villa"
                id={villaName}
                value={fields.villa}
                onChange={e => onChange(idx, e)}
               >    
               {getVilla &&
                getVilla.map((villa) => (
                  <MenuItem><option value={villa.villaName}>{villa.villaName}</option></MenuItem>
                ))} 
                </Select>
          
              
            </>
          );
        })}

        <Button
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
        </Grid>
      </form>
    </div>
  );
}

export default CustomerForm;
