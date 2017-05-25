/* Configuracao da base de dados. */

import mongoose from "mongoose";

// const uri = process.env.MONGO_URI || "mongodb://localhost/reactCalendarDB";

const uri = "mongodb://localhost/reactCalendarDB";

/* Conecta a base de dados. */
mongoose.connect(uri);

mongoose.connection.on("error", () => {
  console.log(
    "Error! Could not connect to MongoDB. Did you forget run mongod?"
  );
});

export default mongoose;
