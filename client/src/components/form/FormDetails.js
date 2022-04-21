import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import dateformat from "dateformat";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getFormDetails, clearErrors } from "../../actions/formAction";

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
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8 mt-5 order-details">
            <h1 className="mb-4">Booking Info</h1>
            <h3 className="mb-4">Your booking ID is {id} </h3>

            <p>
              <b>Name:</b> {firstName + lastName}
            </p>
            <p>
              <b>email:</b> {email}
            </p>
            <p>
              <b>Villa Name:</b> {villaName}
            </p>
            <p>
              <b>Check In Date:</b> {changeDateFormat(checkInDate)}
            </p>
            <p>
              <b>Check Out Date:</b> {changeDateFormat(checkOutDate)}
            </p>
            <p>
              <b>Number of days:</b> {getDifferenceInDays(date2, date1)}
            </p>
            <p>
              <b>Number of Nights:</b> {totalDays - 1}
            </p>
            <hr></hr>
            <h2>
              <b>Total Price:</b> {finalPrice.toLocaleString("en-US")} ₱
            </h2>
            <h2>
              <b>Down payment:</b> {downPayment.toLocaleString("en-US")} ₱
            </h2>
            <h3>
              <b>booking status:</b> {bookingStatus}
            </h3>
            <h4>
              <b>Instructions:</b>
              <p>
                Please use the booking ID as your payment reference. You can pay
                the full amount or the down payment.
              </p>
              Please monitor your booking status, only PAY if your booking
              status says PROCESSING WITH DATES APPROVED.
            </h4>

            <h4>
              <a
                href="https://www.paypal.me/garett09?country.x=PH&locale.x=en_US"
                className="btn btn-primary"
                target="_blank"
              >
                <i className="fa fa-money"> Pay here via PayPal</i>{" "}
              </a>
            </h4>
          </div>
        </div>
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
