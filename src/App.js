import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SectionMain from "./components/SectionMain";
import SectionCelso from "./components/SectionCelso";
import { GlobalStyles } from "./components/SectionMain";
import SectionFooter from "./components/SectionFooter";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <SectionMain />
      <SectionCelso />
      <SectionFooter />
      
    </div>
  );
}

export default App;
