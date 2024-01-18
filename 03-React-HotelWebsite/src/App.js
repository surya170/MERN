import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import CountryCards from "./Components/CountryCards";
import Contact from "./Components/Contact";
import InfoBox from "./Components/InfoBox";
import  "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <LandingPage/>
      <CountryCards/>
      <CountryCards/>
      <InfoBox/>
      <Contact/>
      <div style={{marginBottom : '200px'}} />
    </React.Fragment>
  );
}

export default App;
