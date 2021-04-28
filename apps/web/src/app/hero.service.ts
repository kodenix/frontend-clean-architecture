import { Injectable } from '@angular/core';
import { RepositoryFactory, GetAllHeroUsecase, HeroRepository } from '@fca/logic';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private repository: HeroRepository;

  constructor(repository: HeroRepository) {
    //this.repository = repositoryFactory.getRepository();
    this.repository = repository;
  }

  public async getAll() {
    const command = new GetAllHeroUsecase(this.repository);
    return await command.execute(null);
  }

}
