import express from "express";
import { getAllCars, getCarById, saveCar,updateCar,deleteCar } from "../controllers/CarsController.js";

const router = express.Router();

router.get('/cars',getAllCars);
router.get('/cars/:id',getCarById);
router.post('/cars',saveCar);
router.patch('/cars/:id',updateCar);
router.delete('/cars/:id',deleteCar);

export default router;

