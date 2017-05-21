import { Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Home";
import EventPage from "./EventPage";
import EventCreate from "./EventCreate";
import EventEdit from "./EventEdit";

const Header = () => (
  <header>
    <Link to="/">
      <h3>React Calendar</h3>
    </Link>
  </header>
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
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/event" component={ EventCreate } />
      <Route exact path="/events/:id" component={ EventPage } />
      <Route exact path="/events/edit/:id" component={ EventEdit } />
      <Route component={ PageNotFound } />
    </Switch>
    <Footer />
  </div>
);

export default App;
