import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

/**
 * Nosso serviço não precisa conhecer os objetos de Request e Response
 * Portanto, criamos uma interface para receber os parâmetros
 * que serão utilizados na manipulação.
 * E também não usamos retorno do tipo response dentro do serviço
 * em caso de erro, lançamos exceções.
 *
 * Porquê? Hoje estamos utilizando o express como framework
 * para trabalhar com o Request e Response, porém se um dia
 * precisarmos alterar esse framework, ficará mmais simple
 * de realizar essa alteração.
 */
interface IRequest {
  name: string;
  description: string;
}

// Classe que só tem uma única função, podemos utilizar o execute
class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }:IRequest):void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
