import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getFormDetails, clearErrors } from "../../actions/formAction";


const FormDetails = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { requestId } = useParams();

  const { error, forms } = useSelector((state) => state.formDetails);
  //const {  lastName, email, mobileNumber, villaName, villaPrice, checkInDate, checkOutDate, bookingStatus, createdAt } = forms

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (forms) {
      setFirstName(forms.firstName);
      setLastName(forms.lastName);
    } else {
      dispatch(getFormDetails(requestId));
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, error, requestId]);

  return (
    <Fragment>
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-details">
          <h4 className="mb-4">Shipping Info</h4>

          <p>
            <b>Phone:</b> {firstName}
          </p>
          <p>
            <b>email:</b> {lastName}
          </p>
          
        </div>
      </div>
    </Fragment>
  );
}

export default FormDetails;
