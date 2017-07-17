import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const employeeRoutes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path: 'employees/form', component: EmployeeFormComponent },
    { path: 'employees/:id', component: EmployeeFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(employeeRoutes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule {}