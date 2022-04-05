import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getFormDetails, clearErrors } from '../../actions/formAction'

const FormDetails = ({ match }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const {error, forms } = useSelector(state => state.getFormDetails)
    const { firstName, lastName, email, mobileNumber, villaName, villaPrice, checkInDate, checkOutDate, bookingStatus, createdAt } = forms

    useEffect(() => {
        dispatch(getFormDetails(match.params.id));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])




    return (

        <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Form # {forms._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b> {firstName + lastName}</p>
                            <p><b>Phone:</b> {mobileNumber}</p>
                            <p><b>email:</b> {email}</p>
                            <p><b>check in date:</b> {checkInDate}</p>
                            <p><b>check out date:</b> {checkOutDate}</p>
                            <p><b>created at:</b> {createdAt}</p>


                            <p className="mb-4"><b>Villa Name:</b>{villaName}</p>
                            <p><b>Villa Price:</b> ${villaPrice}</p>

                            <hr />

                            


                            <h4 className="my-4">Booking Status:</h4>
                            <p className={bookingStatus && String(bookingStatus).includes('Approved') ? "greenColor" : "redColor"} ><b>{bookingStatus}</b></p>


                            <hr />

                            <hr />
                        </div>
                    </div>
                    </Fragment>

    )
}

export default FormDetails