import React from "react";
import "./App.css";
import Student from "./Components/Student";

// shift + alt + o to remove unused imports
function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm p-2 ml-3">
           <a href="/" className="navbar-brand">React with Props & State  </a>
        </nav>
         {/*
        <MessageCard name="Surya" age="25" designation="Software Engineer"/>
        <MessageCard name="Charan" age="17" designation="Associate Engineer"/>
        <MessageCard name="Ashok" age="32" designation="Senior Engineer"/>
        */}
        <Student/>

    </React.Fragment>
  );

}

export default App;
