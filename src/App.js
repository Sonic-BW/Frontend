import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';

//React Router
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Navbar
import Navbar from "./Components/Navbar/Navbar.js"

//Auth
import Login from "./Components/Auth/Login/Login"
import Registration from "./Components/Auth/Registration/Registration"
import About from "./Components/Auth/About/About"
import Dashboard from "./Components/Dashboard/Dashboard"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" exact render={props => <Redirect to="/login" {...props} />} /> 
        <Navbar />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/register" exact component={Registration} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
