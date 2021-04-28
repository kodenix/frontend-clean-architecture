import { HeroRepository } from './hero.repository';

export abstract class RepositoryFactory {
  abstract getRepository(): HeroRepository;
}
