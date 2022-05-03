import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allForms, clearErrors } from "../../actions/formAction";
import { allUsers } from "../../actions/userActions";
import { Grid, Typography } from "@mui/material";

import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { forms } = useSelector((state) => state.allForms);
  const { users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allForms());
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2 p-6 ">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily="Abhaya Libre SemiBold"
            color="Black"
            fontWeight="500"
            paddingBottom={5}
          >
            Dashboard
          </Typography>
          <Fragment>
            <div className="row pr-4">
              <div className="col-xl-6 col-sm-6 mb-6">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      <Typography
                        variant="h5"
                        textAlign="center"
                        fontFamily="Abhaya Libre SemiBold"
                        color="white"
                        fontWeight="400"
                      >
                        Bookings
                      </Typography>
                      <br /> <b>{forms && forms.length}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/forms/all"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-sm-6 mb-6">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                    <Typography
                        variant="h5"
                        textAlign="center"
                        fontFamily="Abhaya Libre SemiBold"
                        color="white"
                        fontWeight="400"
                      >
                        Users
                      </Typography>
                      <br /> <b>{users && users.length}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/users"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <Grid sx={{ paddingTop: 5 }}>
              {" "}
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                <i className="fa fa-arrow-left"> Go back</i>{" "}
              </button>
            </Grid>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
