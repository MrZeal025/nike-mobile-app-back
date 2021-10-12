import { Router } from "express";
import { getOneUserController } from "./_controllers/get";

export const router = Router();

router.route("/:id").get(getOneUserController);


export default router;
