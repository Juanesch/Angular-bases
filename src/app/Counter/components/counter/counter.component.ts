import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter', //PONER ESTO EN EL HTML PARA QUE SE VEA
  // PLANTILLAS YA DEFINIDAS
  template: `
    <p>contador: {{ counter }}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetNumber(10)">Reset</button>

  `
})

 // PONER CounterComponent EN APP.MODULE.TS -> @NgModule -> declarations:
export class CounterComponent {

  public counter: number = 0;
  // ESTO ES PARA QUE EL CONTADOR CAMBIE.
  increaseBy (value: number):void {
  this.counter+= value;
 }

  decreaseBy (value: number): void {
  this.counter-= value;
 }

  resetNumber (value: number): void{
  this.counter = value;
 }
}
