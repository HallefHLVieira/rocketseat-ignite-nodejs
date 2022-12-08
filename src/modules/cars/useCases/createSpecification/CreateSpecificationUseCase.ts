import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private speciificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }:IRequest):void {
    const specificationAlreadyExists = this.speciificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.speciificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
