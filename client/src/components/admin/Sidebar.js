import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/admin/forms/all">
              <i className="fa fa-shopping-basket"></i> Bookings
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <i className="fa fa-users"></i> Users
            </Link>
          </li>
          <li>
            <Link to="/">
            <i class="fa fa-home" aria-hidden="true"></i> Main Menu
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
