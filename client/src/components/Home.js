import React from "react";
import SectionMain from "./SectionMain";
import SectionCelso from "./SectionCelso";
import SectionAboutUs from "./SectionAboutUs";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import SectionAccomodation from "./SectionAccomodation";
import FAQ from "./FAQ";


function Home() {
  return (
<>
    <SectionMain />
    <SectionCelso />
    <SectionAboutUs />
    <FAQ />
    <SectionAccomodation />
    
    </>
  );
}

export default Home;
