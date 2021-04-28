import { UseCase } from '../../base/use-case';
import { Hero } from '../../domain/hero.model';
import { HeroRepository } from '../../repositories/hero.repository';

export class GetAllHeroUsecase implements UseCase<void, Hero[]> {

  constructor(private repository: HeroRepository) { }

  async execute(param: void): Promise<Hero[]> {
    return this.repository.getAll();
  }
}
