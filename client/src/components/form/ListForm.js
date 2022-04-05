import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import dateformat from "dateformat";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { myForm, getFormDetails, clearErrors } from "../../actions/formAction";

const ListForm = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, forms } = useSelector((state) => state.myForm);
  const [myForms, setMyForms] = useState([])
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  useEffect(() => {
    dispatch(myForm());


    if (error) {
      alert.error(error);
      dispatch(clearErrors());
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
          name: form.formRequestor.firstName + " " + form.formRequestor.lastName,
          villaName: form.villaDetails.villaName,
          totalPrice: form.totalPrice,
          bookingStatus:
            form.bookingStatus &&
            String(form.bookingStatus).includes("Approved") ? (
              <p style={{ color: "green" }}>{form.bookingStatus}</p>
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
      <h1 className="my-5">My Orders</h1>

      <MDBDataTable data={setForm()} className="px-3" bordered striped hover />
    </Fragment>
  );
};

export default ListForm;
