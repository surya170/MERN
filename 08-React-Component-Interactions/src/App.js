import React from "react";
import "./App.css";
import ParentComponent from "./Components/basic/ParentComponent";
import ParentCard from "./Components/intermediate/ParentCard";

// shift + alt + o to remove unused imports
function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm p-2 ml-3">
        <a href="/" className="navbar-brand">React with Component interaction </a>
      </nav>
     <ParentCard/>
    </React.Fragment>
  );

}

export default App;
