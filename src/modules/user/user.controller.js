import userModel from "../../../DB/models/drink.model.js";
import { catchError } from "../../utils/ErrorHandling.js";

export const addUser = catchError(async (req, res, next) => {
  const { name, password, role } = req.body;
  const newUser = await userModel.Create({ name, password, role });
  res.status(200).json("done");
});
