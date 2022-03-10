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
import CasaAurelia from "./components/CasaAurelia";
import CasaSalud from "./components/CasaSalud";
import Casa from "./components/Casa";
import CssBaseline from "@mui/material/CssBaseline";
import Customers from "./pages/Customers";
import Splash from "./pages/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <div className="App">
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SectionMain/>} />
        <Route path="celsohall" element={<SectionCelso/>} />
        <Route path="aboutus" element={<SectionAboutUs/>} />
        <Route path="splash" element={<Splash/>} />
      </Routes>      

    </Router>
    </div>
  );
}

export default App;
