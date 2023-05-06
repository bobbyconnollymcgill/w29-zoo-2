import fs from "fs";
import { faker } from "@faker-js/faker";

const animalCount = 10000;
const habitatCount = 10000;
const feedingTimeCount = 10000;

const animalsList = [
  "bear",
  "bird",
  "cat",
  "cetacean",
  "cow",
  "crocodilia",
  "dog",
  "fish",
  "horse",
  "insect",
  "lion",
  "rabbit",
  "rodent",
  "snake",
];

const habitatsList = [
  "Savannah",
  "Rainforest",
  "Desert",
  "Tundra",
  "Mangrove",
  "Alpine",
  "Wetland",
  "Grassland",
  "Chaparral",
  "Coral Reef",
  "Seagrass Meadow",
  "Kelp Forest",
  "Ocean",
  "Temperate Forest",
  "Boreal Forest",
  "Mountain",
  "Freshwater Lake",
  "River",
  "Swamp",
  "Estuary",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAnimals(count) {
  const animals = [];

  for (let i = 0; i < count; i++) {
    const animalType = getRandomElement(animalsList);
    animals.push({
      id: `a${i + 1}`,
      name: animalType,
      species: faker.animal[animalType](),
      age: getRandomInt(1, 20),
    });
  }

  return animals;
}

function generateHabitats(count) {
  const habitats = [];

  for (let i = 0; i < count; i++) {
    habitats.push({
      id: `h${i + 1}`,
      name: getRandomElement(habitatsList),
      description: `Habitat description ${i + 1}`,
      animalId: `a${i + 1}`,
    });
  }

  return habitats;
}

function generateFeedingTimes(count) {
  const feedingTimes = [];

  for (let i = 0; i < count; i++) {
    feedingTimes.push({
      id: `f${i + 1}`,
      time: `${getRandomInt(0, 23)}:${getRandomInt(0, 59)}`,
      animalId: `a${i + 1}`,
      status: "scheduled",
    });
  }

  return feedingTimes;
}

const data = {
  animals: generateAnimals(animalCount),
  habitats: generateHabitats(habitatCount),
  feedingTimes: generateFeedingTimes(feedingTimeCount),
  users: [
    {
      id: "u1",
      name: "Alice",
      role: "admin",
      permissions: ["read", "write", "delete", "notify"],
    },
    {
      id: "u2",
      name: "Bob",
      role: "manager",
      permissions: ["read", "write", "notify"],
    },
  ],
};

fs.writeFile("large_data.json", JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log("Data has been written to file");
});
