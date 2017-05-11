/* Configuracao da base de dados. */

import mongoose from "mongoose";

/* Conecta a base de dados. */
mongoose.connect("mongodb://localhost/reactCalendarDB");

mongoose.connection.on("error", () => {
  console.log(
    "Error! Could not connect to MongoDB. Did you forget run mongod?"
  );
});

export default mongoose;
