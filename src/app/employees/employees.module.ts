import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmployeesRoutingModule } from './employees.routing.module';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LabelRequiredModule } from './../shared/label-required/label-required.module';
import { FilterEmployeePipe } from './../shared/filter-employee.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    EmployeesRoutingModule,
    LabelRequiredModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeFormComponent,
    FilterEmployeePipe
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
