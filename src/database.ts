import Mongoose from "mongoose";

(async () => {
  try {
    const db = await Mongoose.connect("mongodb://localhost/even3-database");
    console.log("Database is connected to : ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
