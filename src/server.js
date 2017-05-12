"use strict";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./components/App";

import path from "path";
import express from "express";
import router from "./routes";
import mongoose from "./config/db";
import bodyParser from "body-parser";

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

app.use(router);

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
