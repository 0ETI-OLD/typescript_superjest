import express from "express";
import { usersRouter } from "./services/users.router";

export const app = express();

app.use(express.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("SANITY CHECK");
});
