import dbConnection from "../DB/dbConnection.js";
import cors from "cors";
import { globalErrorHandler } from "./utils/ErrorHandling.js";
import drinkRouter from "./modules/drink/drink.routes.js";
import userRouter from "./modules/user/user.routes.js";
const bootstrap = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use("/drink", drinkRouter);
  app.use("/user", userRouter);
  app.use(globalErrorHandler);
  dbConnection();
};

export default bootstrap;
