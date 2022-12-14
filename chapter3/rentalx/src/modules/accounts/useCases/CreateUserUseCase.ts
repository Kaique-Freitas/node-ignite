import { container, inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";

container.registerSingleton("UsersRepository", UsersRepository);

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      username,
      driver_license,
      password,
    });
  }
}

export { CreateUserUseCase };
