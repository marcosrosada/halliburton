import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';

const employeeRoutes: Routes = [
    { path: 'employee', component: EmployeesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(employeeRoutes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule {}