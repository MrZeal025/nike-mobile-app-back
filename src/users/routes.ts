import { Router } from "express";

export const router = Router();

router.route("/many");

router.route("/:id");

router.route("/");

export default router;
