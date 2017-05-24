"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const uri = process.env.MONGO_URI || "mongodb://localhost/reactCalendarDB";
var uri = "mongodb://rodolpho:r0d0lph0@ds151141.mlab.com:51141/reactcalendardb";

/* Conecta a base de dados. */
/* Configuracao da base de dados. */

_mongoose2.default.connect(uri);

_mongoose2.default.connection.on("error", function () {
  console.log("Error! Could not connect to MongoDB. Did you forget run mongod?");
});

exports.default = _mongoose2.default;