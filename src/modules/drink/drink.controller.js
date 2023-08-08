import drinkModel from "../../../DB/models/drink.model.js";
import { AppError, catchError } from "../../utils/ErrorHandling.js";

export const getDrinks = catchError(async (req, res, next) => {
  const drinks = await drinkModel.find();
  res.status(200).json({ drinks });
});

export const addDrink = catchError(async (req, res, next) => {
  const { name, price, image } = req.body;
  const newDrink = await drinkModel.Create({ name, price, image });
  res.status(200).json("done", newDrink);
});

export const editDrink = catchError(async (req, res, next) => {
  const { id, name, price, image } = req.body;
  const drink = await drinkModel.findByIdAndUpdate(id, { name, price, image });
  if (drink) {
    res.json("done", { message: `drink updated successfully` });
  }
  next(new AppError("drink doesn't exist", 404));
});

export const deleteDrink = catchError(async (req, res, next) => {
  const { id } = req.body;
  const drink = await drinkModel.findByIdAndDelete(id);
  if (drink) {
    res.json("done", { message: `drink deleted successfully` });
  }
  next(new AppError("drink doesn't exist", 404));
});
