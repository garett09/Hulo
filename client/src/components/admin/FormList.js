import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import dateformat from "dateformat";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { allForms, clearErrors, deleteForms } from "../../actions/formAction";

const FormList = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteLoading, setDeleteLoading] = useState("");

  const { loading, error, forms } = useSelector((state) => state.allForms);
  const { isDeleted } = useSelector((state) => state.form);
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  useEffect(() => {
    dispatch(allForms());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const deleteForms = (id) => async () => {
    // Delete order

    if (window.confirm("Are you sure you want to delete this form?")) {
      try {
        setDeleteLoading(true);
        const { data } = await axios.delete(`/api/v1/admin/forms/${id}`);

        if (data.success) {
          //alert code
          alert.success("Form deleted successfully");
          navigate('/admin/forms/all')
          setDeleteLoading(false);
        }
      } catch (error) {
        setDeleteLoading(false);
        alert.error(error.response.data.message);
      }
    }
  };

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
          label: "View",
          field: "actions",
          width: 100,
        },
        {
          label: "Delete",
          field: "delete",
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
          totalPrice: form.totalPrice,
          bookingStatus:
            form.bookingStatus &&
            String(form.bookingStatus).includes("Dates approved and paid") ? (
              <p style={{ color: "green" }}>{form.bookingStatus}</p>
            ) : String(form.bookingStatus).includes("Processing") ? (
              <p style={{ color: "#DE970B" }}>{form.bookingStatus}</p>
            ) : (
              <p style={{ color: "red" }}>{form.bookingStatus}</p>
            ),
          actions: (
            <Link to={`/admin/forms/${form._id}`} className="btn btn-primary">
              <i className="fa fa-eye"></i>
            </Link>
          ),
          delete: (
            <Button
              className="btn btn-primary"
              onClick={() => deleteForms(form._id)}
              disabled={deleteLoading}
            >
              <i className="fa fa-trash"></i>
            </Button>
          ),
        });
      });

    return data;
  };
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
  );
};

export default FormList;
