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

  boarding: Boarding;
  employees: Employee[];
  employeeSelected: any;
  

  constructor(
      private boardingService: BoardingService,
      private employeesService: EmployeesService,
      private router: Router
  ) { 
    this.boarding = new Boarding();
  }

  ngOnInit() {
    this.employees = this.employeesService.getEmployees();
  }

  onChangeEmployee(employeeId: number) {
    this.employeeSelected = this.employees.filter( item => item.id == employeeId )[0];
    this.boarding.employee = this.employeeSelected;    
  }

  
  onSubmit(form) {
    console.log(this.boarding);
    this.boardingService.createBoarding(this.boarding);
    
    this.router.navigate(['/boarding']);
  }

  checkValidTouched(field) {
      return !field.valid && field.touched;
  }

}
