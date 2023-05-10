import express from "express";
import cookieParser from "cookie-parser";
import animalsRouter from "./routes/animals.mjs";
import habitatsRouter from "./routes/habitats.mjs";
import feedingTimesRouter from "./routes/feedingTimes.mjs";
import usersRouter from "./routes/users.mjs";
import notificationsRouter from "./routes/notifications.mjs";

const SECRET =
  "kdkdjhf98hf98hgifuhseiufh98h4trisehfoisdfkjsdng98wehg9r8hdgkjfhkjg";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<html><body>hi</body></html>");
});

app.use(express.static("public")); // GET + "/" --> index.html

app.use("/api/animals", animalsRouter);
app.use("/api/habitats", habitatsRouter);
app.use("/api/feedingTimes", feedingTimesRouter);
app.use("/api/users", usersRouter);
app.use("/api/notifications", notificationsRouter);

// if you want to go from basic auth to JWTs, you will need something like this
app.post("/api/signin", (req, res) => {
  // validate username and password from request payload
  // generate a jwt and send it back to the browser/client in the response headers (res.cookie)
  //
});

app.post("/cookie-example", (req, res) => {
  console.log("hello?");
  res.cookie("my-cookie", "jwt value sdkfjhsk jdghskdjghksd jghksjdhgkj");
  res.end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
