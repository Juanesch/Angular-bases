import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 10;
  public method: string = "Invisibility";


  get firstCapitalized ():string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  getheroDescription(): string {
    return `${this.name} is ${this.age} years old.`
  }

  // VOID SIGNIFICA QUE NO REGRESA NADA.

  changeHero ():void{
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 20
  }

  resetHero(): void{
    this.name = 'ironman';
    this.age = 10;
  }
}
