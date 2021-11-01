import { Router } from "express";
import { default as projects } from "./projects";
import { default as users } from "./users";
import { default as components } from "./components";

const router = Router();

router.use("/projects", projects);
router.use("/users", users);
router.use("/components", components);

export default router;
