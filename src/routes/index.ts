import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

// padronizando o path com o recurso específico
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router };
