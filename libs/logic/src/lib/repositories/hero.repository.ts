import { Hero } from '../domain/hero.model';

export abstract class HeroRepository {
  abstract getById(id: number): Promise<Hero>;
  abstract getAll(): Promise<Hero[]>;
}
