import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

export { usersRouter };
