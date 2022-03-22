import React, { useState } from "react";
import Header from "../../header/Header";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function Login() {
  const [user, setUser] = useState(initialState);
  return (
    <div className="login_page">
      <Header />
      <h2>Login</h2>
      <form>
        <div>
        <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value="adriansian@gmail.com" name="email" />
        </div>
      </form>
    </div>
  );
}

export default Login;
