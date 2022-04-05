import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getFormDetails, clearErrors } from "../../actions/formAction";


const FormDetails = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate =useNavigate()

  const { error, formDetails, success, loading } = useSelector((state) => state.formDetails);

  const [formRequestor, setFormRequestor] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  
  const [villaDetails, setVillaDetails] = useState({
    villaName: '',
    checkInDate: '',
    checkOutDate: '',

  });

  
const {firstName, lastName, email} = formRequestor
const {villaName, checkInDate, checkOutDate} = villaDetails
//const {totalPrice, bookingStatus, createdAt} = others

useEffect(() => {
  if(formDetails && formDetails._id !== id) {
    dispatch(getFormDetails(id));
  } else if (formDetails) {
    setFormRequestor(formDetails.formRequestor)
    setVillaDetails(formDetails.villaDetails)
    //setOthers(formDetails.others)
  }
else {
    dispatch(getFormDetails(id));
  }

  if (error) {
    alert.error(error);
    dispatch(clearErrors());
    navigate('/forms/me')
  }

}, [dispatch, alert, error, formDetails, id]);






  return (
    <Fragment>

      {!loading &&
           <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-details">
          <h4 className="mb-4">Shipping Info</h4>

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
            <b>Check In Date:</b> {checkInDate}
          </p>
          <p>
            <b>Check Out Date:</b> {checkOutDate}
          </p>

        </div>
      </div>
      }
 
    </Fragment>
  );
}

export default FormDetails;
