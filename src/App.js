import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SectionMain from "./components/SectionMain";
import SectionCelso from "./components/SectionCelso";
import { GlobalStyles } from "./components/SectionMain";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SectionMain />
      <SectionCelso />
      <Header />
    </div>
  );
}

export default App;
