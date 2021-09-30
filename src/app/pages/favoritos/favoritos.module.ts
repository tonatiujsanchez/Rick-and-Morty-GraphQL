import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { FovoritosRoutingModule } from './favoritos-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    FovoritosRoutingModule,
    ComponentsModule
  ]
})
export class FavoritosModule { }
