import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmployeesRoutingModule } from './employees.routing.module';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LabelRequiredComponent } from './../shared/label-required/label-required.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    EmployeesRoutingModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeFormComponent,
    LabelRequiredComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
