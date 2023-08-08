import { Router } from "express";
const router = Router();
import * as userController from "./user.controller.js";
router.post("/", userController.addUser);
