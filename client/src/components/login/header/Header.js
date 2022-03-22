import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Hulo</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <ConfirmationNumberIcon />
            Bookings
          </Link>
        </li>
        <li>
          <Link to="/login">
            <AccountCircleIcon />
            Sign-in
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
