import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SectionMain from "./components/SectionMain";
import SectionCelso from "./components/SectionCelso";
import SectionAboutUs from "./components/SectionAboutUs";
import { GlobalStyles } from "./components/SectionMain";
import Footer from "./components/Footer";
import CasaAurelia from "./components/CasaAurelia";

function App() {
  return (
    <div className="App">
      <Header />
      
      <SectionMain />
      <SectionCelso />
      <SectionAboutUs />
      <CasaAurelia />
      <Footer />
    </div>
  );
}

export default App;
