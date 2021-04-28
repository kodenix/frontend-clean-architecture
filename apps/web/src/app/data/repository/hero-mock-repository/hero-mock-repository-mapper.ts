import { Hero, Mapper } from '@fca/logic';
import { HeroMockDto } from './hero-mock-dto';

export class HeroMockRepositoryMapper extends Mapper <HeroMockDto, Hero> {
  mapFrom(param: HeroMockDto): Hero {
    return {
      id: param.id,
      name: param.name,
    };
  }

  mapTo(param: Hero): HeroMockDto {
    return {
      id: param.id,
      name: param.name,
    };
  }
}
