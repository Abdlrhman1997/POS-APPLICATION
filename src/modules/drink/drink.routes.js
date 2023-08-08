import { Router } from "express";
import * as drinkController from "./drink.controller.js";
const router = Router();

router.get("/", drinkController.getDrinks);
router.post("/", drinkController.addDrink);
router.patch("/", drinkController.editDrink);
router.delete("/", drinkController.deleteDrink);

export default router;
