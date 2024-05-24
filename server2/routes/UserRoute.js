import express from "express";
import { getAllUsers,getUserById,saveUser,updateUser,deleteUser,loginUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users/login', loginUser);

export default router;


