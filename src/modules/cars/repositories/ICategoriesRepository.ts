import { Category } from '../model/Category';

/**
 * DTO: Prática de interfaces usadas para as rotas não
 * conhecerem o model na mesma camada.
 */
 interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository{
  findByName(name:string): Category | undefined;
  list(): Category[];
  create({ name, description }:ICreateCategoryDTO):void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
