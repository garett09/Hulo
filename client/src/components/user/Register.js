import React, { Fragment, useState, useEffect } from "react";
import "../user/user.css";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    cf_password: "",
  });

  const { firstName, lastName, email, mobileNumber, password} =
    user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      nav("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("firstName", firstName);
    formData.set("lastName", lastName);
    formData.set("email", email);
    formData.set("mobileNumber", mobileNumber);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <div>
      <div className="login_page">
        <h2>Register</h2>

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              placeholder="Enter your First Name"
              id="firstName"
              value={firstName}
              name="firstName"
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              placeholder="Enter your First Name"
              id="lastName"
              value={lastName}
              name="lastName"
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="email">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              id="mobileNumber"
              value={mobileNumber}
              name="mobileNumber"
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              value={password}
              name="password"
              onChange={onChange}
            />
          </div>

          <div className="row">
            <button type="submit">Register</button>
          </div>
        </form>

        <p>
          Already an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
