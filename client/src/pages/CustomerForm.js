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

const CustomerForm= () =>{


  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    villasName: "",
    villasPrice:"",
    description: "",
  });
  const { firstName, lastName, email, villasName, villasPrice, description} =
  userInfo;

  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);


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

}, [selectedField])


  const submitHandler = (e) => {
    e.preventDefault();

    setUserInfo({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      villasName: selectedField,
      villasPrice: fields.price,
      description: fields.description,

    })
  

    const form = new FormData();
    form.set("firstName", firstName);
    form.set("lastName", lastName);
    form.set("email", email);
    form.set("villasName", villasName);
    form.set("villasPrice", fields.price);
    form.set("description", fields.description);

    dispatch(createForm(form));
    console.log(userInfo)
  
    

    };

    const onChange = (e) => {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      setSelectedField(e.target.value)
  }



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
            onChange={onChange}
          />
          <Input
            type="text"
            name="lastName"
            label="Last Name"
            value={user && user.lastName}
            onChange={onChange}
          />

          <Input
            type="text"
            name="email"
            label="email"
            value={user && user.email}
            onChange={onChange}
          />

          <select
            name="selectedField"
            value={selectedField}
            onChange={onChange}
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
          >SUBMIT</Button>
        </Grid>
      </form>
    </div>
  );
} 

export default CustomerForm;
