import { db } from "../db.mjs";

// Possible values for permission argument: "read", "write", "notify"
// You can add more permissions if you want or extend the logic to support roles or permissions scoped to specific resources (e.g. "read:animals")

// This is a higher-order function that returns a middleware function and with permission argument frozen-in in the closure
export function authorize(permission) {
  if (
    !permission ||
    typeof permission !== "string" ||
    !["admin", "read", "write", "delete", "notify"].includes(permission)
  ) {
    throw new Error("Invalid permission argument " + permission); // This will prevent the server from starting
  }

  return (req, res, next) => {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    // our client should "base64 encode" this string
    // and we would decode it here
    const [email, password] = Buffer.from(authHeader, "base64")
      .toString("utf-8")
      .slice(6)
      .split(":");

    const user = db.data.users.find((u) => {
      return u.email === email && u.password === password;
    });

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const hasPermission =
      user.permissions && user.permissions.includes(permission); // permission argument is frozen-in in the closure of the authorize function

    if (!hasPermission) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  };
}
