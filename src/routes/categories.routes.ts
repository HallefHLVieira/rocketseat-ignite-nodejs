/** INFO - ROUTES
 * Responsabilidade das rotas:
 * 1 - Apenas receber a request.
 * 2 - Chamar o controller responsável pelo recurso
 */

import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));

categoriesRoutes.post('/import', upload.single('file'), (request, response) => importCategoryController.handle(request, response));

// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
