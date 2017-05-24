"use strict";
import { Server } from "http";
import path from "path";
import express from "express";
import router from "./routes";
import mongoose from "./config/db";
import bodyParser from "body-parser";

var app = express();
var server = new Server(app);
// var port = process.env.port || 8080;

/* Define os arquivos estaticos. */
app.use("/static", express.static(path.resolve("./src/public")));

/* Define as views. */
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

/* Define o parser de formularios. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// app.listen(port, () => {
//   console.log("Server running at http://localhost:%d", port);
// });

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) return console.error(err);
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
