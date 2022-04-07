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
import axios from "axios";

function CustomerForm() {
  const [userInfo, setUserInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const getVillaName = (villas, field) => {
    const val = villas.find((getVilla) => getVilla.villaName === villas);

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
  const [villas, setVillasArr] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/v1/villas`);
        if (data.success) {
          setVillasArr(data.villas);
        }
        setLoading(false);
      } catch (error) {
        alert.error(error.response.data.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [selectedField, setSelectedField] = useState("");
  const [fields, setFields] = useState({
    price: "",
    description: "",
  });

  useEffect(() => {
    const values = villas.find(v => v.villaName === selectedField)
    setFields({
        price: values?.villaPrice,
        description: values?.description
    })

    console.log(fields)
}, [selectedField])

  const submitHandler = (e) => {
    e.preventDefault();

    setUserInfo({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  };

  return (
    // loading ? <p>villas loaded</p> :
    //     villasArr.map(villa => <p>{villa.villaName}</p>)
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

          <select
            name="selectedField"
            value={selectedField}
            onChange={e => {
              setSelectedField(e.target.value)
          }}
          >
            <option value="">-</option>
            {villas.map((villa) => (
              <option value={villa.villaName}>{villa.villaName}</option>
            ))}
          </select>

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
