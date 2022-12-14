import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/users", usersRouter);

export { router };
