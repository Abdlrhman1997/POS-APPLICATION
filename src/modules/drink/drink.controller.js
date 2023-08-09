import drinkModel from "../../../DB/models/drink.model.js";
import { AppError, catchError } from "../../utils/ErrorHandling.js";

export const getDrinks = catchError(async (req, res, next) => {
  const drinks = await drinkModel.find();
  res.status(200).json({ drinks });
});

export const addDrink = catchError(async (req, res, next) => {
  const { name, price, image, category } = req.body;
  const newDrink = await drinkModel.create({ name, price, image, category });
  res.status(200).json({ message: "done", newDrink });
});

export const editDrink = catchError(async (req, res, next) => {
  const { id } = req.params;
  const { price } = req.body;
  const drink = await drinkModel.findByIdAndUpdate(id, { price });
  if (drink) {
    res.json({ message: "done", drink });
  }
  next(new AppError("drink doesn't exist", 404));
});

export const deleteDrink = catchError(async (req, res, next) => {
  const { id } = req.params;
  const drink = await drinkModel.findByIdAndDelete(id);
  if (drink) {
    res.json({ message: `done`, drink });
  }
  next(new AppError("drink doesn't exist", 404));
});
