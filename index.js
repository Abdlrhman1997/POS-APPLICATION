import express from "express";
import dbConnection from "./DB/dbConnection.js";
import bootstrap from "./src/index.router.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
dbConnection();
bootstrap(app, express);
app.listen(port, () => console.log(`running on port ${port}`));
