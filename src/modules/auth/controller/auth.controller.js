import userModel from "../../../../DB/model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { catchError } from "../../../utils/ErrorHandling.js";

export const login = catchError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return next(new AppError("wrong email or password", 404));
  }
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    return next(new AppError("wrong email or password", 400));
  }
  const token = jwt.sign(
    { name: user.userName, id: user._id, isOnline: user.isOnline },
    "sasadanceonmsasa",
    { expiresIn: "1h" }
  );
  await userModel.updateOne({ email }, { isOnline: true, isDeleted: false });

  return res.json({ message: `welcome user logged succefully`, token, user });
});
