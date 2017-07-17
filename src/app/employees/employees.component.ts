import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private employees: any[];
  
  constructor(
      private employeesService: EmployeesService,
      private router: Router
    ) { }

  ngOnInit() {
    this.employees = this.employeesService.getEmployees();
  }

  createEmployee() {
    this.router.navigate(['/employees/form']);
  }

}
