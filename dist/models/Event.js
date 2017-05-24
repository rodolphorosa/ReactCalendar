"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Esquema da tabela evento. */
var eventSchema = _mongoose2.default.Schema({
  start: Date, /* Data de inicio do evento. */
  end: Date, /* Data do termino do evento. */
  title: String, /* Titulo do evento. */
  description: String, /* Descricao do evento. */
  local: String /* Local do evento. */
});

var Event = _mongoose2.default.model("Event", eventSchema);

exports.default = Event;