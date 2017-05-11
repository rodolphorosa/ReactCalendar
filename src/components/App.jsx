import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";
import EventPage from "./Event";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/event/:id" component={EventPage} />
    <Route component={NoMatch}/>
  </Switch>
);

export default App;
