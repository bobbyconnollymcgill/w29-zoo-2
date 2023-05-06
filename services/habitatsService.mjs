import { db } from "../db.mjs";

export async function getAllHabitats() {
  return db.data.habitats;
}

export async function createHabitat(habitat) {
  db.data.habitats.push(habitat);
  await db.write();
  return habitat;
}

export async function updateHabitat(id, updates) {
  const habitat = db.data.habitats.find((h) => h.id === id);

  if (!habitat) {
    return null;
  }

  Object.assign(habitat, updates);
  await db.write();
  return habitat;
}

export async function deleteHabitat(id) {
  const habitatIndex = db.data.habitats.findIndex((h) => h.id === id);

  if (habitatIndex === -1) {
    return false;
  }

  db.data.habitats.splice(habitatIndex, 1);
  await db.write();
  return true;
}
