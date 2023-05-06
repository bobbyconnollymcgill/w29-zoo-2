import { db } from "../db.mjs";

export async function getAllUsers() {
  return db.data.users;
}

export async function createUser(user) {
  // re-spread into a new object to avoid mutating the original object
  const newUser = { ...user };
  db.data.users.push(newUser);
  await db.write();
  return newUser;
}

export async function updateUser(userId, userUpdates) {
  const user = db.data.users.find((u) => u.id === userId);

  if (!user) {
    return null;
  }

  Object.assign(user, userUpdates);
  await db.write();
  return user;
}

export async function deleteUser(userId) {
  const userIndex = db.data.users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return false;
  }

  db.data.users.splice(userIndex, 1);
  await db.write();
  return true;
}
