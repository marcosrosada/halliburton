import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from "angular2-materialize";

import { BoardingModule } from './boarding/boarding.module';
import { EmployeesModule } from './employees/employees.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LabelRequiredModule } from './shared/label-required/label-required.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    BoardingModule,
    LabelRequiredModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
