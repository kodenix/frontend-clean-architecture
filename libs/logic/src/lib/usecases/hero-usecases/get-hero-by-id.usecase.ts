import { UseCase } from '../../base/use-case';
import { Hero } from '../../domain/hero.model';
import { HeroRepository } from '../../repositories/hero.repository';

export class GetHeroByIdUsecase implements UseCase<number, Hero> {

  constructor(private repository: HeroRepository) { }

  execute(param: number): Promise<Hero> {
    return this.repository.getById(param);
  }
}
