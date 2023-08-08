import userModel from "../../DB/models/user.model.js";
import { catchError } from "../../utils/ErrorHandling.js";

const checkRole = catchError(async (req, res, next) => {
  const { name } = req.body;

  const user = await userModel.find(name);
  if (user.role === "admin") {
    res.status(200).json("admin");
  }
  res.status(200).json("user");
});

export default checkRole;
