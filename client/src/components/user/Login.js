import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../user/user.css";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import { Button } from "react-bootstrap";
import Header2 from "../../components/Header2"

const Login = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("false");

  const showPasswordToggle = () => setShowPassword(!showPassword);

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
    dispatch(login(email, password));
  };
   


  return (
    <Fragment>
      <div>
        <div className="login_page">
          <Header2 />
          
          <h2>Login</h2>
 
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                id="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="password">Password</label>
            <div className="passHol">
              
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Enter password"
                id="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)} 

              />
              <Button variant="secondary"onClick={showPasswordToggle}>
                <span className="fa-sm">
                  <i
                    className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                  ></i>
                </span>
              </Button>
            </div>

            <div className="row">
              <button type="submit">Login</button>
              <Link to="/password/forgot">Forgot your password?</Link>
            </div>
          </form>
          <p className="newCustomer">
            New Customer? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
