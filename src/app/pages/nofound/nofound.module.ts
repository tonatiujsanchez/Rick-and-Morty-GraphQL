import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NofoundComponent } from './nofound.component';
import { NofoundRoutingModule } from './nofound-routing.module';



@NgModule({
  declarations: [
    NofoundComponent
  ],
  imports: [
    CommonModule,
    NofoundRoutingModule
  ]
})
export class NofoundModule { }
