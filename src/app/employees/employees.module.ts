import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees.routing.module';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeFormComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
