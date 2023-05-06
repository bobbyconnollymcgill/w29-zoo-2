import express from "express";
import { getAllAnimals, createAnimal } from "../services/animalsService.mjs";
import { authorize } from "../middleware/auth.mjs";
import { paginationSortingMiddleware } from "../middleware/paginationSortingMiddleware.mjs";
import { db } from "../db.mjs";

const router = express.Router();

// GET /api/animals
// get all animals
router.get(
  "/",
  [authorize("read"), paginationSortingMiddleware(async () => db.data.animals)],
  async (req, res) => {
    // NOTE, with the paginationSortingMiddleware HoF middleware, which takes a function that calls into the databas
    // and the logic below, it all seems like a bad abstraction (ie. we should try to flatten the code and come up with a better solution / code organization)
    // It demonstrates why you SHOULDN'T try to write "clean code" from the get-go. Ignore people on youtube.
    // Next time, DON'T separate code into layers. Let the project evolve and you can "compress" the code once you see a good abstraction
    if (res.paginatedSortedResults) {
      res.json(res.paginatedSortedResults);
    } else {
      const animals = await getAllAnimals();
      res.json(animals);
    }
  }
);

// GET animal by id
router.get("/:id", authorize("read"), async (req, res) => {
  const animal = await getAnimalById(req.params.id);
  res.json(animal);
});

// create a new animal
router.post("/", authorize("write"), async (req, res) => {
  const animal = req.body;
  const newAnimal = await createAnimal(animal);
  res.status(201).json(newAnimal);
});

export default router;
