import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MaterializeDirective} from "angular2-materialize";
import { BoardingService } from './../boarding.service';
import { EmployeesService } from './../../employees/employees.service';
import { Employee } from './../../employees/employee.model';
import { Boarding } from './../boarding.model';

@Component({
  selector: 'app-boarding-form',
  templateUrl: './boarding-form.component.html',
  styleUrls: ['./boarding-form.component.css']
})
export class BoardingFormComponent implements OnInit {

  boarding: Boarding = new Boarding();
  employees: Employee[];

  framework: string = 'Angular 2';
  

  constructor(
      private boardingService: BoardingService,
      private employeesService: EmployeesService,
      private router: Router
  ) { }

  ngOnInit() {
    this.employees = this.employeesService.getEmployees();
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(this.boarding);
    
    // this.boardingService.createBoarding(form.value);
    
    // this.router.navigate(['/boarding']);
  }

  checkValidTouched(field) {
      return !field.valid && field.touched;
  }

}
