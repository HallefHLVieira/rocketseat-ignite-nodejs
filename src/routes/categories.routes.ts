/** INFO - ROUTES
 * Responsabilidade das rotas:
 * 1 - Apenas receber a request.
 * 2 - Chamar o serviço específico.
 * 3 - Executar algo;
 * 4 - retornar algo;
 */

import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));

export { categoriesRoutes };
