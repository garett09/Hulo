import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import dateformat from "dateformat";



import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allForms, clearErrors } from '../../actions/formAction'
const changeDateFormat = (date) => dateformat(date, "fullDate");


const FormList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, form } = useSelector(state => state.allForms);

    useEffect(() => {
        dispatch(allForms());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }


    }, [dispatch, alert, error, history])



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
        form &&
        form.forEach((form) => {
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
    }


    return (
        <Fragment>

            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Orders</h1>

                            <MDBDataTable
                                data={setForm()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default FormList