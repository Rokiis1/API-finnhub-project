import express, { Application } from "express";
const { logger } = require("../middleware/logEvents");
import cors from "cors";
import logsRoute from "../routes/logsRoute";
function createServer() {
  const app: Application = express();

  app.use(express.urlencoded({ extended: false }));

  // Middleware for json
  app.use(express.json());

  // custom middleware logger
  app.use(logger);

  // Cross Origin Resource Sharing
  app.use(cors());

  app.use("/api/v1/logs", logsRoute);

  return app;
}

export default createServer;
