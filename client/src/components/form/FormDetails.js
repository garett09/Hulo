import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import dateformat from "dateformat";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getFormDetails, clearErrors } from "../../actions/formAction";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header2 from "../../components/Header2";

const FormDetails = ({ match }) => {
  const changeDateFormat = (date) => dateformat(date, "fullDate");
  const alert = useAlert();
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const { error, formDetails, success, loading } = useSelector(
    (state) => state.formDetails
  );

  const [formRequestor, setFormRequestor] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [villaDetails, setVillaDetails] = useState({
    villaName: "",
  });

  const { firstName, lastName, email } = formRequestor;
  const { villaName, villaPrice } = villaDetails;
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");

  useEffect(() => {
    if (formDetails && formDetails._id !== id) {
      dispatch(getFormDetails(id));
    } else if (formDetails) {
      setFormRequestor(formDetails.formRequestor);
      setVillaDetails(formDetails.villaDetails);
      setCheckInDate(formDetails.checkInDate);
      setCheckOutDate(formDetails.checkOutDate);
      setTotalPrice(formDetails.totalPrice);
      setBookingStatus(formDetails.bookingStatus);
    } else {
      dispatch(getFormDetails(id));
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      navigate("/forms/me");
    }
  }, [dispatch, alert, error, formDetails, id]);

  const date1 = new Date(changeDateFormat(checkOutDate));
  const date2 = new Date(changeDateFormat(checkInDate));

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const totalDays = getDifferenceInDays(date1, date2);
  const totalPricePerDay = totalPrice / totalDays;
  const finalPrice = villaPrice * totalDays;
  const downPayment = finalPrice * 0.2;

  return (
    <Fragment>
      {!loading && (
        <Grid>
          <Header2 />
          <Grid lg="auto" sx={{ paddingTop: 12 }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily="Abhaya Libre SemiBold"
              color="Black"
              fontWeight="1000"
            >
              Booking Information
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily="Abhaya Libre SemiBold"
              color="Black"
              fontWeight="1000"
            >
              Your booking ID is {id}
            </Typography>
          </Grid>

          <Grid container spacing={1} columns={16} sx={{ paddingTop: 15 }}>
            <Grid lg={4}></Grid>
            <Grid
              container
              rowSpacing={12}
              lg={4}
              sx={{ textAlign: "left", minHeight: "20vh" }}
            >
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Name: {firstName + " " + lastName}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Email: {email}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Villa Name: {villaName}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Check In Date:{changeDateFormat(checkInDate)}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Check Out Date:{changeDateFormat(checkOutDate)}
              </Typography>
            </Grid>
            <Grid lg={1}></Grid>
            <Grid
              container
              rowSpacing={12}
              lg={3}
              sx={{ textAlign: "left", minHeight: "20vh" }}
            >
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Number of days: {getDifferenceInDays(date2, date1)}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Number of Nights: {totalDays - 1}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Total Price: {finalPrice.toLocaleString("en-US")} ₱
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="1000"
                paddingBottom={2}
              >
                Down payment: {downPayment.toLocaleString("en-US")} ₱
              </Typography>
              <a
                href="https://www.paypal.me/garett09?country.x=PH&locale.x=en_US"
                className="btn btn-primary"
                target="_blank"
              >
                <i className="fa fa-money"> Pay here via PayPal</i>{" "}
              </a>
            </Grid>
          </Grid>
          <hr></hr>

          <Typography
            variant="h5"
            textAlign="center"
            fontFamily="Abhaya Libre SemiBold"
            color="red"
            fontWeight="1000"
          >
            Booking Status: {bookingStatus}
          </Typography>

          <h4>
          <Typography
          variant="h3"
            textAlign="center"
            fontFamily="Abhaya Libre SemiBold"
            color="red"
            fontWeight="1000"
          >
            Instructions:
          </Typography>
    
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily="Abhaya Libre SemiBold"
              color="Black"
              fontWeight="1000"
            >
              Please use the booking ID as your payment reference. You can pay
              the full amount or the down payment.
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily="Abhaya Libre SemiBold"
              color="Black"
              fontWeight="1000"
            >
            Please monitor your booking status, only PAY if your booking status
            says PROCESSING WITH DATES APPROVED.
            </Typography>
          </h4>
        </Grid>
      )}
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/forms/me")}
      >
        <i className="fa fa-arrow-left"> Go back</i>{" "}
      </button>
    </Fragment>
  );
};

export default FormDetails;
