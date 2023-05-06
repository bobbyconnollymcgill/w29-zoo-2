import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/usersService.mjs";
import { authorize } from "../middleware/auth.mjs";

const router = express.Router();

// get all users
router.get("/", authorize("read"), async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

// add a new user
router.post("/", authorize("admin"), async (req, res) => {
  const user = req.body;
  const newUser = await createUser(user);
  res.status(201).json(newUser);
});

// update a user by id
router.put("/:id", authorize("admin"), async (req, res) => {
  const { id } = req.params;
  const userUpdates = req.body;
  const updatedUser = await updateUser(id, userUpdates);

  if (!updatedUser) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(updatedUser);
  }
});

// delete a user by id
router.delete("/:id", authorize("admin"), async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteUser(id);

  if (!deleted) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(204).end();
  }
});

export default router;
