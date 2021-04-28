import { Injectable } from '@angular/core';
import { Hero, HeroRepository } from '@fca/logic';
import { HeroMockDto } from './hero-mock-dto';
import { HeroMockRepositoryMapper } from './hero-mock-repository-mapper';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

let HEROS: HeroMockDto[] = [
  {
    'id': 1,
    'name': 'Mr. MockBig',
  },
  {
    'id': 2,
    'name': 'Mrs. MockTootoot',
  },
  {
    'id': 3,
    'name': 'LittleMockToot',
  }
];

@Injectable({
  providedIn: 'root'
})
export class HeroMockRepository extends HeroRepository {

  private mapper = new HeroMockRepositoryMapper();

  constructor() {
    super();
  }

  async getAll(): Promise<Hero[]> {
    const source = await (of<HeroMockDto[]>(HEROS).toPromise());
    const result = source.map(value => this.mapper.mapFrom(value));
    return of(result).toPromise();
  }

  async getById(id: number): Promise<Hero> {
    const http_result = await from(HEROS)
      .pipe(filter((elephant: HeroMockDto) => elephant.id === id))
      .pipe(map(this.mapper.mapFrom));

    return await http_result.toPromise();;
  }

}
