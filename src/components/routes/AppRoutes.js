import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Signin, Home, Register } from "../import";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Signin} />
      </Router>
    </>
  );
};

export default AppRoutes;
