import express from "express";
import animalsRouter from "./routes/animals.mjs";
import habitatsRouter from "./routes/habitats.mjs";
import feedingTimesRouter from "./routes/feedingTimes.mjs";
import usersRouter from "./routes/users.mjs";
import notificationsRouter from "./routes/notifications.mjs";

const SECRET =
  "kdkdjhf98hf98hgifuhseiufh98h4trisehfoisdfkjsdng98wehg9r8hdgkjfhkjg";

const app = express();
app.use(express.json());

app.use("/api/animals", animalsRouter);
app.use("/api/habitats", habitatsRouter);
app.use("/api/feedingTimes", feedingTimesRouter);
app.use("/api/users", usersRouter);
app.use("/api/notifications", notificationsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
