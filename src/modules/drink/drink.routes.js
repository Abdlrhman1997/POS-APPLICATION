import { Router } from "express";
import * as drinkController from "./drink.controller.js";
import { updateDrink } from "./drink.validation.js";
import validation from "../../middleware/validation.js";
const router = Router();

router.get("/", drinkController.getDrinks);
router.post("/", drinkController.addDrink);
router.patch("/:id", validation(updateDrink), drinkController.editDrink);
router.delete("/:id", drinkController.deleteDrink);

export default router;
