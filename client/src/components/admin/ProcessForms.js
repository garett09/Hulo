import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

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
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, formDetails, success, loading } = useSelector(
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

  const [BookingStatus, setBookingStatus] = useState("");
  const [TotalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    if (formDetails && formDetails._id !== id) {
      dispatch(getFormDetails(id));
    } else if (formDetails) {
      setFormRequestor(formDetails.formRequestor);
      setVillaDetails(formDetails.villaDetails);
      setTotalPrice(formDetails.totalPrice);
      setBookingStatus(formDetails.bookingStatus);
      setTotalPrice(formDetails.totalPrice);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Form has been updated");
      dispatch({ type: UPDATE_FORM_RESET });
    }
  }, [dispatch, id, alert, error]);
  const updateFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("bookingStatus", BookingStatus);

    dispatch(updateForm(id, formData));
    console.log(formData);
  };

  const BookingDetails =
    villaDetails && `${villaDetails.villaName}, ${villaDetails.villaPrice}`;

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            {!loading && (
              <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-7 order-details">
                  <h2 className="my-5">Order # {formDetails._id}</h2>

                  <h4 className="mb-4">Shipping Info</h4>
                  <p>
                    <b>Name:</b> {formRequestor && formRequestor.firstName}
                  </p>
                  <p className="mb-4">
                    <b>Booking:</b>
                    {BookingDetails}
                  </p>
                  <p>
                    <b>Amount:</b> ${TotalPrice}
                  </p>

                  <hr />

                  <h4 className="my-4">Booking Status:</h4>
                  <p
                    className={
                      formDetails.formStatus &&
                      String(formDetails.formStatus).includes("Approved")
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    <b>{BookingStatus}</b>
                  </p>

                  <div className="col-12 col-lg-3 mt-5">
                    <h4 className="my-4">Status</h4>

                    <div className="form-group">
                      <select
                        className="form-control"
                        name="status"
                        value={status}
                        onChange={(e) => setBookingStatus(e.target.value)}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Approved">Approved</option>
                        <option value="Denied">Denied</option>
                      </select>
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => updateFormHandler(formDetails._id)}
                    >
                      Update Status
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessForms;
