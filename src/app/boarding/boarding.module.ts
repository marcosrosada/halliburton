import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BoardingRoutingModule } from './boarding.routing.module';
import { BoardingsService } from './boarding.service';
import { BoardingComponent } from './boarding.component';
import { BoardingFormComponent } from './boarding-form/boarding-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BoardingRoutingModule
  ],
  declarations: [
    BoardingComponent,
    BoardingFormComponent
  ],
  exports: [
    BoardingComponent
  ],
  providers: [
    BoardingsService
  ]
})
export class BoardingModule { }
