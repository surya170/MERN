import React from "react";
import "./App.css";
import ProductItem from "./Components/ProductItem";

// shift + alt + o to remove unused imports
function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm p-2 ml-3">
           <a href="/" className="navbar-brand">React with Events & Binding  </a>
        </nav>
       {/* <MessageCard/>  */}
       <ProductItem/>
    </React.Fragment>
  );

}

export default App;
