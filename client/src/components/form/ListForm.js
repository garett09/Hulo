import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { myForm, clearErrors } from '../../actions/formAction'

const ListForm = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, form } = useSelector(state => state.myForm);

    useEffect(() => {
        dispatch(myForm());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])

    const setForm = () => {
        const data = {
            columns: [
                {
                    label: 'Created At',
                    field: 'createdAt',
                    width: 100
                },
                {
                    label: 'Name',
                    field: 'name',
                    width: 100
                },
                {
                    label: 'Villa Name',
                    field: 'villaName',
                    width: 100
                },
                {
                    label: 'Villa Price',
                    field: 'villaPrice',
                    width: 100
                },
                {
                    label: 'Booking Status',
                    field: 'bookingstatus',
                    width: 100
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    width: 100
                },
            ],
            rows: []
        }

        form && form.forEach(form => {
            data.rows.push({
                createdAt: form.createdAt,
                name: form.firstName + form.lastName,
                villaName: form.villaName,
                villaPrice: form.villaPrice,
                status: form.bookingStatus && String(form.bookingStatus).includes('Processing')
                    ? <p style={{ color: 'green' }}>{form.bookingStatus}</p>
                    : <p style={{ color: 'red' }}>{form.bookingStatus}</p>,
                actions:
                    <Link to={`/form/${form._id}`} className="btn btn-primary">
                        <i className="fa fa-eye"></i>
                    </Link>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <h1 className="my-5">My Orders</h1>


                <MDBDataTable
                    data={setForm()}
                    className="px-3"
                    bordered
                    striped
                    hover
                />
           

        </Fragment>
    )
}

export default ListForm