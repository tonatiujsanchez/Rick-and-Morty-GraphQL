import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosComponent } from './episodios.component';
import { EpisodiosRoutingModule } from './episodios-routing.module';



@NgModule({
  declarations: [
    EpisodiosComponent
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule
  ]
})
export class EpisodiosModule { }
