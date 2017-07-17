import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';

const appRouter: Routes = [
    { path: '', component: ScheduleComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}