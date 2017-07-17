import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees.routing.module';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [
    EmployeesComponent
  ],
  exports: [
    EmployeesComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
