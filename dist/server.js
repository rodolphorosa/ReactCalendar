"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _db = require("./config/db");

var _db2 = _interopRequireDefault(_db);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.port || 8080;

/* Define os arquivos estaticos. */
app.use("/static", _express2.default.static(_path2.default.resolve("./src/public")));

/* Define as views. */
app.set("view engine", "ejs");
app.set("views", _path2.default.resolve("./src/views"));

/* Define o parser de formularios. */
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_routes2.default);

app.listen(port, function () {
  console.log("Server running at http://localhost:%d", port);
});