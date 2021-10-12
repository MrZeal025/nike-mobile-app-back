import { Router } from "express";
import { userLoginSchema } from "authentication/login/schema";
import { userInfo } from "users/schema";
// controllers
import { createOneApplicantController } from "users/_controllers/create";
import { loginController } from "authentication/login/_controllers/login";
import { validateRequest } from "_utils";

export const router = Router();

router
	.route("/users/sign-up")
	.post(validateRequest(userInfo), createOneApplicantController);

router.route("/users/login").post(validateRequest(userLoginSchema), loginController)

export default router;
