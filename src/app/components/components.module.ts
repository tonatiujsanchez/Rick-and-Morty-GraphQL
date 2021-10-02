import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    CardPersonajeComponent,
    SpinnerComponent
  ],
  exports: [
    CardPersonajeComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
