/* INFO - REPOSITORY
 * Responsável por fazer toda a manipulação do meu recurso
*/

import { Specification } from '../../model/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }:ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name:string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );
    return specification;
  }

  // list(): Category[] {
  //   return this.categories;
  // }
}

export { SpecificationsRepository };
