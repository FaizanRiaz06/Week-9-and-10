import express from "express";
import { addProducts, getFoodById, getFoodItems } from "../controllers/Food.js";

const router = express.Router();

router.post("/addProducts", addProducts);
router.get("/getFoodItems", getFoodItems);
router.get("/:id", getFoodById);

export default router;
