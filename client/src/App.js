import React from "react";
import "./App.css";
import Header from "./components/Header";
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
import Customers from "./pages/Customers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CasaAurelia from "./components/CasaAurelia";
import CasaBasyong from "./components/CasaBasyong";
import CasaDePrimavera from "./components/CasaDePrimavera";
//login
import BodyLogin from "./components/login/body/Body.js";
import Login from "./components/login/body/auth/Login";
import Register from "./components/login/body/auth/Register";
import ActivationEmail from "./components/login/body/auth/ActivationEmail";


function App() {
  return (
    <div className="App">
      <Router>
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
          
          //login
          <Route path = "/headers" className="Header" element={<BodyLogin />} />
          <Route path = "/login" className="Login" element={<Login />} />
          <Route path = "/register" className = "Register" element ={<Register />}/>
          <Route path = "/user/activate/:activation_token" className = "Header" element ={<ActivationEmail />}/>

        </Routes>
        <Customers />
      </Router>
      
    </div>
  );
}

export default App;
