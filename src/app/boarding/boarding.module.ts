import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardingRoutingModule } from './boarding.routing.module';
import { BoardingComponent } from './boarding.component';

@NgModule({
  imports: [
    CommonModule,
    BoardingRoutingModule
  ],
  declarations: [
    BoardingComponent
  ],
  exports: [
    BoardingComponent
  ]
})
export class BoardingModule { }
