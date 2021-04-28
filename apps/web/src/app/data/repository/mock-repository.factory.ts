import { HeroRepository, RepositoryFactory } from '@fca/logic';
import { HeroMockRepository } from './hero-mock-repository/hero-mock.repository';
import { HttpClient } from '@angular/common/http';

export class MockRepositoryFactory extends RepositoryFactory {

  constructor() {
    super();
  }

  getRepository(): HeroRepository {
    return new HeroMockRepository();
  }
}
