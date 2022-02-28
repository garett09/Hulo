import React from "react";
import SectionMain from "./SectionMain";
import SectionCelso from "./SectionCelso";
import SectionAboutUs from "./SectionAboutUs";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";


function Home() {
  return (
<>
    <SectionMain />
    <SectionCelso />
    <SectionAboutUs />
    </>
  );
}

export default Home;
