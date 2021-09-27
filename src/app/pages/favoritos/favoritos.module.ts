import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { FovoritosRoutingModule } from './favoritos-routing.module';



@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    FovoritosRoutingModule
    
  ]
})
export class FavoritosModule { }
