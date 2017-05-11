"use strict";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import NoMatch from "./components/NoMatch";
import App from "./components/App";

import path from "path";
import express from "express";
import mongoose from "./config/db";
import bodyParser from "body-parser";

import Event from "./models/Event";

var app = express();
var port = process.env.port || 8080;

/* Define os arquivos estaticos. */
app.use("/static", express.static(path.resolve("./src/public")));

/* Define as views. */
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

/* Define o parser de formularios. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/events", (req, res) => {
  Event.find((err, response) => {
    res.json({ events: response });
  });
});

app.get("/api/events/:id", (req, res) => {
  Event.findById(req.params.id, (err, response) => {
    if (err) res.json({ message: "Event not found!" });
    res.json({ event: response});
  });
});

app.get("*", (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location = { req.url } context = { context }>
      <App />
    </StaticRouter>
  );
  res.status(200).render("index", { html });
});

app.listen(port, () => {
  console.log("Server running at http://localhost:%d", port);
});
