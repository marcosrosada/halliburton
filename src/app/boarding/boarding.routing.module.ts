import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardingComponent } from './boarding.component';

const boardingRoutes: Routes = [
    { path: 'boarding', component: BoardingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(boardingRoutes)],
    exports: [RouterModule]
})
export class BoardingRoutingModule {}