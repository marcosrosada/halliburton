import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from '../employees.service';
import { Employee } from './../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor(
      private employeesService: EmployeesService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.employeesService.createEmployee(form.value);
    
    this.router.navigate(['/employees']);
  }

  checkValidTouched(field) {
      return !field.valid && field.touched;
  }

}
