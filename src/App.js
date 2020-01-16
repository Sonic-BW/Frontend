import React from "react";
import "./App.css";

//React Router
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//Auth
import Login from "./Components/Auth/Login"
import Registration from "./Components/Auth/Registration"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" exact render={props => <Redirect to="/login" {...props} />} /> 
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Registration} />
      </div>
    </Router>
  );
}

export default App;
