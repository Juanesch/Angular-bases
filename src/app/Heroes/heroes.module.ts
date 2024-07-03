import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './Hero/hero.component';
import { ListComponent } from './List/list.component';

// SIEMPRE PONER "CommonModule" CUANDO SE TENGA NgIf, NgFor...


@NgModule({

  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]

})
export class HeroesModule { }
