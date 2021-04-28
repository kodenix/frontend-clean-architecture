import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from '@fca/logic';

@Component({
  selector: 'fca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'Frontend Clean Architecture';

  heros: Hero[] = [];

  constructor(private service: HeroService) {
    this.getData();
  }

  private async getData() {
    this.heros = await this.service.getAll();
  }

}
