import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import dateformat from "dateformat";
import { Grid } from "@mui/material";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { myForm, clearErrors } from "../../actions/formAction";

const ListForm = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, forms } = useSelector((state) => state.myForm);
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  useEffect(() => {
    dispatch(myForm());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      navigate("/");
    }
  }, [dispatch, alert, error]);

  const setForm = () => {
    const data = {
      columns: [
        {
          label: "Created At",
          field: "createdAt",
          width: 100,
        },
        {
          label: "Name",
          field: "name",
          width: 100,
        },
        {
          label: "Villa Name",
          field: "villaName",
          width: 100,
        },
        {
          label: "Total Price",
          field: "totalPrice",
          width: 100,
        },
        {
          label: "Booking Status",
          field: "bookingStatus",
          width: 100,
        },
        {
          label: "Actions",
          field: "actions",
          width: 100,
        },
      ],
      rows: [],
    };

    forms &&
      forms.forEach((form) => {
        data.rows.push({
          createdAt: changeDateFormat(form.createdAt),
          name:
            form.formRequestor.firstName + " " + form.formRequestor.lastName,
          villaName: form.villaDetails.villaName,
          totalPrice: form.totalPrice.toLocaleString("en-US") + " ₱",
          bookingStatus:
            form.bookingStatus &&
            String(form.bookingStatus).includes("Dates approved and paid") ? (
              <p style={{ color: "green" }}>{form.bookingStatus}</p>
            ) : String(form.bookingStatus).includes("Processing") ? (
              <p style={{ color: "#DBA800" }}>{form.bookingStatus}</p>
            ) : (
              <p style={{ color: "red" }}>{form.bookingStatus}</p>
            ),
          actions: (
            <Link to={`/form/${form._id}`} className="btn btn-primary">
              <i className="fa fa-eye"></i>
            </Link>
          ),
        });
      });

    return data;
  };

  return (
    <Fragment>
      <h1 className="my-5">My Bookings</h1>
      <MDBDataTable data={setForm()} className="px-3" bordered striped hover />

      <Grid>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          <i className="fa fa-arrow-left"> Go back</i>{" "}
        </button>
      </Grid>
    </Fragment>
  );
};

export default ListForm;
