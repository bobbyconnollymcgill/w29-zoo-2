import { db } from "../db.mjs";

export async function getAllFeedingTimes() {
  return db.data.feedingTimes;
}

export async function createFeedingTime(feedingTime) {
  db.data.feedingTimes.push(feedingTime);
  await db.write();
  return feedingTime;
}

export async function updateFeedingTime(id, updates) {
  const feedingTime = db.data.feedingTimes.find((ft) => ft.id === id);

  if (!feedingTime) {
    return null;
  }

  Object.assign(feedingTime, updates);
  await db.write();
  return feedingTime;
}

export async function deleteFeedingTime(id) {
  const feedingTimeIndex = db.data.feedingTimes.findIndex((ft) => ft.id === id);

  if (feedingTimeIndex === -1) {
    return false;
  }

  db.data.feedingTimes.splice(feedingTimeIndex, 1);
  await db.write();
  return true;
}
