import mongoose from "mongoose";

/* Esquema da tabela evento. */
var eventSchema = mongoose.Schema({
  start: Date,         /* Data de inicio do evento. */
  end: Date,           /* Data do termino do evento. */
  title: String,       /* Titulo do evento. */
  description: String, /* Descricao do evento. */
  local: String        /* Local do evento. */
});

var Event = mongoose.model("Event", eventSchema);

export default Event;
