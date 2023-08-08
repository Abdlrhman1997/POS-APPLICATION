import connectDB from "../DB/connection.js";
import cors from "cors";
import { globalErrorHandler } from "./utils/ErrorHandling.js";

const bootstrap = (app, express) => {
  app.use(cors());
  app.use(express.json());

  app.use(globalErrorHandler);
  connectDB();
};

export default bootstrap;
