import createServer from "./src/config/createServer";
import mongoose from "mongoose";
const connectDB = require("./src/config/dbConn");
require("dotenv").config();

// Connect to MongoDB
connectDB();
const app = createServer();
const PORT: string | undefined = process.env.PORT;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
