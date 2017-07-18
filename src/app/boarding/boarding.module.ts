import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from "angular2-materialize";

import { BoardingRoutingModule } from './boarding.routing.module';
import { BoardingService } from './boarding.service';
import { BoardingComponent } from './boarding.component';
import { BoardingFormComponent } from './boarding-form/boarding-form.component';
import { LabelRequiredModule } from './../shared/label-required/label-required.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BoardingRoutingModule,
    LabelRequiredModule,
    MaterializeModule
  ],
  declarations: [
    BoardingComponent,
    BoardingFormComponent
  ],
  exports: [
    BoardingComponent
  ],
  providers: [
    BoardingService
  ]
})
export class BoardingModule { }
