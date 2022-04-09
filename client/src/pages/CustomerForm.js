import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  Typography,
  Grid,
  Input,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";

import { createForm, clearErrors } from "../actions/formAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CustomerForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    villaName: "",
    villaPrice: 0,
    description: "",
  });

  const { firstName, lastName, email, villaName, villaPrice, description } =
    userInfo;

  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { error, success } = useSelector((state) => state.newForm);

  const [villas, setVillasArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

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
    const values = villas.find((v) => v.villaName === selectedField);
    setFields({
      price: values?.villaPrice,
      description: values?.description,
    });
  }, [selectedField]);

  const submitHandler = (e) => {
    e.preventDefault();

    setUserInfo({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      villaName: selectedField,
      villaPrice: fields.price,
      description: fields.description,
    });

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    const form = new FormData();
    form.set("firstName", firstName);
    form.set("lastName", lastName);
    form.set("email", email);
    form.set("villasName", villaName);
    form.set("villasPrice", villaPrice);
    form.set("description", description);
    form.set("checkInDate", checkInDate);
    form.set("checkOutDate", checkOutDate);

    dispatch(createForm(form));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Please check your email for confirmation");
      nav("/");
    }
  }, [dispatch, alert, error, success]);

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setSelectedField(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Grid>
          <Grid container justifyContent="center">
            <Typography variant="h2" component="h2">
              Customer Booking
            </Typography>
          </Grid>

          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="text"
              name="firstName"
              label="First Name"
              value={user && user.firstName}
              onChange={onChange}
            />
          </Grid>

          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="text"
              name="lastName"
              label="Last Name"
              value={user && user.lastName}
              onChange={onChange}
            />
          </Grid>
          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="text"
              name="email"
              label="Email"
              value={user && user.email}
              onChange={onChange}
            />
          </Grid>
          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <FormControl width={4}>
              <select
                name="villaName"
                value={selectedField}
                onChange={onChange}
              >
                <option value="">-</option>
                {villas.map((villa) => (
                  <option value={villa._villaName}>{villa.villaName}</option>
                ))}
              </select>
            </FormControl>
          </Grid>

          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              shrink
              type="text"
              name="villaPrice"
              label="Villa Price"
              value={fields.price}
              onChange={onChange}
            />
          </Grid>

          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="date"
              label="Check In"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              dateFormat="yyyy/MM/dd"
            />
          </Grid>

          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="date"
              label="Check Out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              dateFormat="yyyy/MM/dd"
            />
          </Grid>

          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
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
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CustomerForm;
