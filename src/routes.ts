import { Router } from "express";
import { default as authRouter } from "authentication/routes";

export const mainRouter = Router();

mainRouter.use("/auth", authRouter);
