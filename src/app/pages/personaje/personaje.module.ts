import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje.component';
import { PersonajeRoutingModule } from './pesonaje-routing.module';



@NgModule({
  declarations: [
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajeRoutingModule
  ]
})
export class PersonajeModule { }
