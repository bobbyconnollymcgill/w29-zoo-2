import { db } from "../db.mjs";

export async function getAllAnimals() {
  return db.data.animals;
}

export async function getAnimalById(animalId) {
  throw new Error("getAnimalById is not yet implemented");
}

export async function createAnimal(animal) {
  db.data.animals.push(animal);
  await db.write();
  return animal;
}
