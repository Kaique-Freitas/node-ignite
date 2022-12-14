import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "tmp/" });

categoriesRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get("/", (_, response) =>
  listCategoriesController.handle(response)
);

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>
  importCategoryController.handle(request, response)
);

export { categoriesRoutes };
