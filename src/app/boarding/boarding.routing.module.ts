import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardingComponent } from './boarding.component';
import { BoardingFormComponent } from './boarding-form/boarding-form.component';

const boardingRoutes: Routes = [
    { path: 'boarding', component: BoardingComponent },
    { path: 'boarding/form', component: BoardingFormComponent },
    { path: 'boarding/:id', component: BoardingFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(boardingRoutes)],
    exports: [RouterModule]
})
export class BoardingRoutingModule {}