/** INFO - ROUTES
 * Responsabilidade das rotas:
 * 1 - Apenas receber a request.
 * 2 - Chamar o controller responsável pelo recurso
 */

import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import multer from 'multer';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
  return importCategoryController.handle(request,response);
});

export { categoriesRoutes };
