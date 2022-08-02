import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstace();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };