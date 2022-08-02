import { container } from "tsyringe";
import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Object> {
    const { name, username, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      email,
      password,
      driver_license,
    });

    return response.json({
      error: false,
      message: "User created with successfuly",
    });
  }
}

export { CreateUserController };
