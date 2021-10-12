import { Router } from "express";
import { default as authRouter } from "authentication/routes";
import { default as userRouter } from "users/routes";

export const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/user", userRouter);