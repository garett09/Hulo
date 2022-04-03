import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../user/user.css";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch() 
  const nav = useNavigate()
  
  const { isAuthenticated, error } = useSelector(state => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 


  

  
  useEffect(() => {
    if (isAuthenticated) {
     nav('/');
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history])

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
    <div>
      <div className="login_page">
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
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="row">
            <button type="submit">Login</button>
            <Link to="/forgot_password">Forgot your password?</Link>
          </div>
        </form>
        <p>
        New Customer? <Link to="/register">Register</Link>
      </p>
      </div>
    </div> 
    </Fragment>
  );
 
}

export default Login;
