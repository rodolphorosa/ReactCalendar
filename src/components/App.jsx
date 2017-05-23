import { Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Home";
import Event from "./Event";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1>React Calendar</h1>
    </Link>
  </div>
);

const Footer = () => (
  <footer>
    <p>
      React Calendar is an example of application
      that uses <strong>ReactJS</strong> and <strong>NodeJS</strong>.
    </p>
  </footer>
);

const PageNotFound = () => (
  <div>
    <h1>404</h1>
    <h3>Page not found!</h3>
    <Link to="/">
      <p>Voltar para página principal.</p>
    </Link>
  </div>
);

const App = () => (
  <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/add" component={ AddEvent } />
      <Route exact path="/events/:id" component={ Event } />
      <Route exact path="/events/edit/:id" component={ EditEvent } />
      <Route component={ PageNotFound } />
    </Switch>
  </div>
);

export default App;
