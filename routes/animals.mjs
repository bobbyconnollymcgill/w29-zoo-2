import express from "express";
import { getAllAnimals, createAnimal } from "../services/animalsService.mjs";
import { authorize } from "../middleware/auth.mjs";

const router = express.Router();

// GET /api/animals
// get all animals
router.get("/", authorize("read"), async (req, res) => {
  const animals = await getAllAnimals();
  res.json(animals);
});

// create a new animal
router.post("/", authorize("write"), async (req, res) => {
  const animal = req.body;
  const newAnimal = await createAnimal(animal);
  res.status(201).json(newAnimal);
});

export default router;
