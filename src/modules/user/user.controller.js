import userModel from "../../../DB/models/user.model.js";
import { catchError } from "../../utils/ErrorHandling.js";

export const addUser = catchError(async (req, res, next) => {
  const { name, password, role } = req.body;
  const newUser = await userModel.create({ name, password, role });
  res.status(200).json({ message: "done", newUser });
});
