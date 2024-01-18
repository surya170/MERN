import React from "react";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import CardSelector from "./Components/CardSelector";
import SMSApp from "./Components/SMSApp";
import Register from "./Components/Register";

// shift + alt + o to remove unused imports
function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm p-2 ml-3">
           <a href="/" className="navbar-brand">React with Forms & Binding  </a>
        </nav>
        {/* <WelcomeMessage/> */}
        {/* <CardSelector/> */}
        {/* <SMSApp/> */}
        <Register/>

    </React.Fragment>
  );

}

export default App;
