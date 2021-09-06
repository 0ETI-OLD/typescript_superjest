import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "./users/entities/User";

export const usersRouter = Router();

usersRouter.post("/", async (req, res, next) => {
  try {
    console.log("REQUEST BODY");
    console.log(req.body);

    const userRepository = getRepository(User);
    const createdUser = await userRepository.create(req.body);
    const savedUser = await userRepository.save(createdUser);

    return res.json(savedUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
