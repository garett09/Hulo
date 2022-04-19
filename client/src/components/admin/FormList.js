import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import dateformat from "dateformat";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { deleteForm, allForms, clearErrors } from "../../actions/formAction";
import { DELETE_FORM_RESET } from "../../constants/formConstants";

const FormList = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, forms } = useSelector((state) => state.allForms);
  const { isDeleted, loading: deleteLoading } = useSelector(
    (state) => state.form
  );
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  useEffect(() => {
    dispatch(allForms());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Form deleted");
      navigate("/admin/forms/all");
      dispatch({ type: DELETE_FORM_RESET });
    }
  }, [dispatch, alert, error, isDeleted, navigate]);

  const setForm = () => {
    const data = {
      columns: [
        {
          label: "Booking ID",
          field: "id",
          width: 100,
        },
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
          id: form._id,
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
            <>
              <Link to={`/admin/forms/${form._id}`} className="btn btn-primary">
                <i className="fa fa-eye"></i>
              </Link>
              <Button
                className="btn btn-secondary"
                onClick={() => deleteHandler(form._id)}
                disabled={deleteLoading}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </>
          ),
        });
      });

    return data;
  };

  const deleteHandler = (id) => {
    if (window.confirm("delete?")) {
      dispatch(deleteForm(id));
    }
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Bookings</h1>

            {!loading && (
              <MDBDataTable
                data={setForm()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
      <Grid sx={{justifyContent: "center"}}>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          <i className="fa fa-arrow-left"> Go back</i>{" "}
        </button>
      </Grid>
    </Fragment>
  );
};

export default FormList;
