import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardingModule } from './boarding/boarding.module';
import { EmployeesModule } from './employees/employees.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    BoardingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
