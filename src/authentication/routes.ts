import { Router } from "express";
import { userInfo } from "users/schema";
// controllers
import { createOneApplicantController } from "users/_controllers/create";
import { validateRequest } from "_utils";

export const router = Router();

router
	.route("/users/sign-up")
	.post(validateRequest(userInfo), createOneApplicantController);

export default router;
