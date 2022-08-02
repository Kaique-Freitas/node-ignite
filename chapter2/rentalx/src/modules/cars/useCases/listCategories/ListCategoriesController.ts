import { Response } from "express";
import { ListCategoriesUseCase } from "../../useCases/listCategories/ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();
    
    return response.json(categories);
  }
}

export { ListCategoriesController };
