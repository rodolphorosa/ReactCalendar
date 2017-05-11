import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route exact={true} path="/about" component={About}/>
    <Route component={NoMatch}/>
  </Switch>
);

export default App;
