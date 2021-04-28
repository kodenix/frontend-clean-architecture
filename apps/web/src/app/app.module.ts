import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroRepository, RepositoryFactory } from '@fca/logic';
import { MockRepositoryFactory } from './data/repository/mock-repository.factory';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HeroRepository,
      useFactory: () => {
        return new MockRepositoryFactory().getRepository();
      },
      deps: [HttpClient],
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
