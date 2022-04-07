import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

const Dashboard = () => {
    
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <h1 className="my-4">Dashboard</h1>
          <Fragment>
            <div className="row pr-4">
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="card text-white bg-primary o-hidden h-70">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Total Amount
                      <br /> <b>8000</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pr-4">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Villas
                      <br /> <b>5</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/villas"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Bookings
                      <br /> <b>1000</b>
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

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Users
                      <br /> <b>100</b>
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
          </Fragment>
          )
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
