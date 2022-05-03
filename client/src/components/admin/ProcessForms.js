import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Grid, Typography } from "@mui/material";
import dateformat from "dateformat";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getFormDetails,
  updateForm,
  clearErrors,
} from "../../actions/formAction";
import { UPDATE_FORM_RESET } from "../../constants/formConstants";

const ProcessForms = () => {
  const [status, setStatus] = useState("");
  const alert = useAlert();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  const { error, formDetails, loading, success } = useSelector(
    (state) => state.formDetails
  );
  const { isUpdated } = useSelector((state) => state.form);

  const [formRequestor, setFormRequestor] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [villaDetails, setVillaDetails] = useState({
    villaName: "",
  });
  const { firstName, lastName, email } = formRequestor;
  const { villaName } = villaDetails;
  const [bookingStatus, setBookingStatus] = useState("");
  const [bookingFinal, setBookingFinal] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const [TotalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    if (formDetails && formDetails._id !== id) {
      dispatch(getFormDetails(id));
    } else if (formDetails) {
      setFormRequestor(formDetails.formRequestor);
      setVillaDetails(formDetails.villaDetails);
      setTotalPrice(formDetails.totalPrice);
      setBookingFinal(formDetails.bookingStatus);
      setCheckInDate(formDetails.checkInDate);
      setCheckOutDate(formDetails.checkOutDate);
    } else {
      dispatch(getFormDetails(id));
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("fORM UPDATED");
      navigate("/admin/forms/all");
      dispatch({ type: UPDATE_FORM_RESET });
    }
  }, [dispatch, id, alert, error, isUpdated, formDetails]);

  const updateFormHandler = (id) => {
    dispatch(updateForm(id, { status: status }));
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            {!loading && (
              <Grid>
                <Grid>
                  <Grid sx ={{paddingTop:"100px"}}>
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
                  <Grid
                    container
                    spacing={1}
                    columns={16}
                    sx={{ paddingTop: 8 }}
                  >
                    <Grid item lg={2}></Grid>
                    <Grid lg={6}>
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
                        Boooking: {villaName}
                      </Typography>
                      <Typography
                        variant="h5"
                        textAlign="left"
                        fontFamily="Abhaya Libre SemiBold"
                        color="Black"
                        fontWeight="1000"
                        paddingBottom={2}
                      >
                        Amount: {TotalPrice.toLocaleString("en-US") + " ₱"}{" "}
                        Pesos
                      </Typography>
                    </Grid>
                    <Grid lg={8}>
                      <Typography
                        variant="h5"
                        textAlign="left"
                        fontFamily="Abhaya Libre SemiBold"
                        color="Black"
                        fontWeight="1000"
                        paddingBottom={2}
                      >
                        Check In Date: {changeDateFormat(checkInDate)}
                      </Typography>
                      <Typography
                        variant="h5"
                        textAlign="left"
                        fontFamily="Abhaya Libre SemiBold"
                        color="Black"
                        fontWeight="1000"
                        paddingBottom={2}
                      >
                        Check Out Date: {changeDateFormat(checkInDate)}
                      </Typography>
                    </Grid>
                  </Grid>

                  <hr />

                  <Typography
                    variant="h5"
                    textAlign="center"
                    fontFamily="Abhaya Libre SemiBold"
                    color="red"
                    fontWeight="1000"
                  >
                    Booking Status: {bookingFinal}
                  </Typography>

                  <Grid>
                  <Typography
                    variant="h4"
                    textAlign="center"
                    fontFamily="Abhaya Libre SemiBold"
                    color="Black"
                    fontWeight="500"
                  > 
                  Status
                  </Typography>
                    <p>{bookingStatus}</p>

                    <div className="form-group">
                      <select
                        className="form-control"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="Processing with Dates not Approved">
                          Processing with Dates not Approved
                        </option>
                        <option value="Processing with Dates Approved">
                          Processing with Dates Approved
                        </option>
                        <option value="Dates approved and paid">
                          Dates approved and paid
                        </option>
                        <option value="Denied">Denied</option>
                      </select>
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => updateFormHandler(formDetails._id)}
                    >
                      Update Status
                    </button>
                  </Grid>
                </Grid>
                <Grid sx= {{paddingTop:"10px"}}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                  >
                    <i className="fa fa-arrow-left"> Go back</i>{" "}
                  </button>
                </Grid>
              </Grid>
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessForms;
