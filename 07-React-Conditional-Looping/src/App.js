import React from "react";
import "./App.css";
import HobbySelectorRadio from "./Components/HobbySelectorRadio";
import EmployeeCard from "./Components/EmployeeCard";

// shift + alt + o to remove unused imports
function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm p-2 ml-3">
        <a href="/" className="navbar-brand">React with Conditional and Looping </a>
      </nav>

      {/* <AuthUser/> */}
      {/* <HobbySelectorRadio/> */}
     <EmployeeCard/>
    </React.Fragment>
  );

}

export default App;
