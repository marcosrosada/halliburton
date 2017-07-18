import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmployeesRoutingModule } from './employees.routing.module';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FilterPipe } from './../shared/filter.pipe';
import { LabelRequiredModule } from './../shared/label-required/label-required.module';

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
    FilterPipe
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
