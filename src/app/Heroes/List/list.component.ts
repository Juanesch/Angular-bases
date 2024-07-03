import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames: string[] = ["Spiderman", "Hulk", "She Hulk", "Thor", "Katherin", "Yulieth"];
   deletedHeroes: string[] = [];


  removeHero(): void {
    const hero = this.heroNames.pop();
    if (hero) {
      this.deletedHeroes.push(hero);
    }
  }

  resetHero(): void{
    const hero = this.deletedHeroes.pop();
    if (hero) {
      this.heroNames.push(hero);
    }
  }

  resetAllHeroes (): void{
    this.deletedHeroes = [];
    this.heroNames = ["Spiderman", "Hulk", "She Hulk", "Thor", "Katherin", "Yulieth"];
  }
}
