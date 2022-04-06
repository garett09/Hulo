import React, { useEffect, useState } from "react";
import "./App.css";

import Home from "./components/Home";
import SectionMain from "./components/SectionMain";
import SectionCelso from "./components/SectionCelso";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionAccomodation from "./components/SectionAccomodation";
import { GlobalStyles } from "./components/SectionMain";
import Footer from "./components/Footer";
import CasaSalud from "./components/CasaSalud";
import Casa from "./components/CasaAurelia";
import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CasaAurelia from "./components/CasaAurelia";
import CasaBasyong from "./components/CasaBasyong";
import CasaDePrimavera from "./components/CasaDePrimavera";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Profile from "./components/user/Profile";
import UpdateUser from "./components/user/UpdateUser";
import AdminRoute from "./components/route/ProtectedRoutes";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import ListForm from "./components/form/ListForm";
import ProtectedRoutes from "./components/route/ProtectedRoutes";
import FormDetails from "./components/form/FormDetails";
import CustomerForm from "./pages/CustomerForm";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<SectionMain />} />
          <Route path="/celsohall" element={<SectionCelso />} />
          <Route path="/aboutus" element={<SectionAboutUs />} />
          <Route path="accomodation" element={<SectionAccomodation />} />
          <Route path="accomodation/casaaurelia" element={<CasaAurelia />} />
          <Route path="accomodation/casabasyong" element={<CasaBasyong />} />
          <Route path="accomodation/casasalud" element={<CasaSalud />} />
          <Route
            path="accomodation/casadeprimavera"
            element={<CasaDePrimavera />}
          />
          
        </Routes>
        <Routes>
          <Route path="/login" className="Login" element={<Login />} />
          <Route path="/register" className="Register" element={<Register />} />
          <Route path="/password/forgot"element={<ForgotPassword />} />
          <Route path="/password/reset/:token"element={<NewPassword />} />
        </Routes>
        <Routes>
          <Route element={<ProtectedRoutes isAdmin ={true}/>}>
            <Route path="/me" element={<Profile />} />
            <Route path="/me/update" element={<UpdateUser />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/forms/me" element={<ListForm />} />
            <Route path="/form/:id" element={<FormDetails />} />
            <Route path="/form/new" element={<CustomerForm />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
