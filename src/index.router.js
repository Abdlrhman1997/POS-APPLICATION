import connectDB from "../DB/connection.js";
import cors from "cors";
import { globalErrorHandler } from "./utils/ErrorHandling.js";
import drinkRouter from "./modules/drink/drink.routes.js";
const bootstrap = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use("/drink", drinkRouter);
  app.use(globalErrorHandler);
  connectDB();
};

export default bootstrap;
