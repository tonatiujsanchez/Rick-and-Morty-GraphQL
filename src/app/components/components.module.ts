import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardPersonajeComponent
  ],
  exports: [
    CardPersonajeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
