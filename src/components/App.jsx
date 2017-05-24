import { Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Home from "./Home";
import Event from "./Event";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";

const Header = () => (
  <header className="header">
    <div className="clock-wrapper">
      <div className="clock">
        <div className="hour-hand"></div>
        <div className="minute-hand"></div>
        <div className="second-hand"></div>
        <div className="middle"></div>
      </div>
    </div>
    <div>
      <Link to="/">
        React Calendar
      </Link>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    React Calendar is an example of <span className="mern-stack">MERN Stack</span> application.
    Developed by Rodolpho Rosa.
    Access <a className="github" href="https://github.com/rodolphorosa">Github</a>
  </footer>
);

const PageNotFound = () => (
  <div className="page-not-found">
    <h1>404</h1>
    <h3>Page not found!</h3>
    <Link to="/">
      &laquo; Página principal.
    </Link>
  </div>
);

const App = () => (
  <div>
    <Header />
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/add" component={ AddEvent } />
        <Route exact path="/events/:id" component={ Event } />
        <Route exact path="/events/edit/:id" component={ EditEvent } />
        <Route component={ PageNotFound } />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
