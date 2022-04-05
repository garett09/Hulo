import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getFormDetails, clearErrors } from '../../actions/formAction'

const FormDetails = ({ match }) => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const requestId = match.params.id

    const {error, form } = useSelector(state => state.formDetails)
    

    useEffect(() => {
        dispatch(getFormDetails(requestId));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, requestId])




    return (

        <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Form # {form._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b> {form.firstName + form.lastName}</p>
                            <p><b>Phone:</b> {form.mobileNumber}</p>
                            <p><b>email:</b> {form.email}</p>
                            <p><b>check in date:</b> {form.checkInDate}</p>
                            <p><b>check out date:</b> {form.checkOutDate}</p>
                            <p><b>created at:</b> {form.createdAt}</p>


                            <p className="mb-4"><b>Villa Name:</b>{form.villaName}</p>
                            <p><b>Villa Price:</b> ${form.villaPrice}</p>

                            <hr />

                            


                            <h4 className="my-4">Booking Status:</h4>
                            <p className={form.bookingStatus && String(form.bookingStatus).includes('Approved') ? "greenColor" : "redColor"} ><b>{form.bookingStatus}</b></p>


                            <hr />

                            <hr />
                        </div>
                    </div>
                    </Fragment>

    )
}

export default FormDetails