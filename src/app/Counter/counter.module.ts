// DEFINICION DE COMPONENTES

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


// TOCA PONER EXPORT PARA QUE SE PUEDA CONSUMIR
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
