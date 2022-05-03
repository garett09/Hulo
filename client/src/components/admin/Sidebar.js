import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="500"
                paddingLeft={2}
                paddingBottom={2}
                paddingTop={2}
              >
                <i className="fa fa-tachometer"></i>Dashboard
              </Typography>
            </Link>
          </li>

          <li>
            <Link to="/admin/forms/all">
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="500"
                paddingLeft={2}
                paddingBottom={2}
              >
                <i className="fa fa-shopping-basket"></i> Bookings
              </Typography>
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="500"
                paddingLeft={2}
                paddingBottom={2}
              >
                <i className="fa fa-users"></i> Users
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Abhaya Libre SemiBold"
                color="Black"
                fontWeight="500"
                paddingLeft={2}
                paddingBottom={2}
              >
                <i class="fa fa-home" aria-hidden="true"></i> Main Menu
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
