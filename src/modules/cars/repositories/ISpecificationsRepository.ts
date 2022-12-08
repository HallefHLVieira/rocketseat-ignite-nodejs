import { Specification } from '../model/Specification';

/**
 * DTO: Prática de interfaces usadas para as rotas não
 * conhecerem o model na mesma camada.
 */
 interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository{
  findByName(name:string): Specification | undefined;
  // list(): Category[];
  create({ name, description }:ICreateSpecificationDTO):void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
