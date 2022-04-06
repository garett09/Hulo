import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import dateformat from "dateformat";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getAdminVillas, clearErrors } from "../../actions/villaAction";

const ProductList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, villas } = useSelector((state) => state.villas);
  const changeDateFormat = (date) => dateformat(date, "fullDate");

  useEffect(() => {
    dispatch(getAdminVillas());
    console.log(getAdminVillas)

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const setVillas = () => {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          width: 100,
        },
        {
          label: "Price",
          field: "Price",
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

    villas &&
      villas.forEach((villa) => {
        data.rows.push({
          id: villa._id,
          villaName: villa.villaName,
          totalPrice: villa.villaPrice,
          actions: (
            <Fragment>
              <Link
                to={`/admin/villas/${villa._id}`}
                className="btn btn-primary py-1 px-2"
              >
                <i className="fa fa-pencil"></i>
              </Link>
              <button className="btn btn-danger py-1 px-2 ml-2">
                <i className="fa fa-trash"></i>
              </button>
            </Fragment>
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
            <h1 className="my-5">All Villas</h1>
            <MDBDataTable
              data={setVillas()}
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

export default ProductList;
