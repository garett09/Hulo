import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import dateformat from "dateformat";
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
import Header2 from "../../src/components/Header2";

const CustomerForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [villaInfo, setVillaInfo] = useState({
    villaName: "",
    villaPrice: "",
    email: "",
  });

  const { firstName, lastName, email } = userInfo;
  const { villaName, villaPrice } = villaInfo;

  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  const { error, success } = useSelector((state) => state.newForm);

  const [villas, setVillasArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  let [totalPrice, setTotalPrice] = useState("");

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

  const date1 = new Date(changeDateFormat(checkOutDate));
  const date2 = new Date(changeDateFormat(checkInDate));

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const totalDays = getDifferenceInDays(date1, date2);

  const submitHandler = (e) => {
    e.preventDefault();

    setUserInfo({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    setVillaInfo({
      villaName: selectedField,
      villaPrice: fields.price,
    });

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);
    setTotalPrice(totalPrice);
    setSelectedField(selectedField);
    console.log(fields, selectedField);

    dispatch(
      createForm({
        firstName: firstName,
        lastName: lastName,
        email: email,
        villaName: selectedField,
        villaPrice: villaPrice,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        totalPrice: totalPrice,
      })
    );
  };

  const overAllPrice = fields.price;
  let finalPrice = overAllPrice * totalDays;
  totalPrice = finalPrice;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success(
        "Please monitor your bookings via this website to see if your booking is confirmed"
      );
      nav("/");
    }
  }, [dispatch, alert, error, success]);

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

    setCheckInDate(e.target.value);
    setCheckOutDate(e.target.value);
    setSelectedField(e.target.value);
  };

  return (
    <div>
      <Grid>
        <Header2 />
      </Grid>
      <form onSubmit={submitHandler}>
        <Grid sx={{ paddingTop: 12 }}>
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
              disabled
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
              disabled
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
              disabled
            />
          </Grid>
          <Grid sx={{ flexGrow: 1, paddingTop: "15px" }}>
            <InputLabel htmlFor="component-simple">Villa</InputLabel>
            <FormControl width={4}>
              <select
                name="villaName"
                label="Villa Name"
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
              value={fields.price?.toLocaleString("en-US") + " ₱" || "" + " ₱"}
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
            <TextField
              InputLabelProps={{ shrink: true }}
              shrink
              type="text"
              name="totalPrice"
              label="Total Price"
              value={totalPrice?.toLocaleString("en-US") + " ₱" || "" + " ₱"}
              onChange={onChange}
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
