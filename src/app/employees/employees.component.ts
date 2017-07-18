import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  filterEmployee: string;
  
  constructor(
      private employeesService: EmployeesService,
      private router: Router
    ) { }


  ngOnInit() {
    this.employees = this.employeesService.getEmployees();
  }
  
  /**
   * Pra melhorar ainda mais a performace do filtro aplicado na lista, não implementei os Pipes
   */
  getEmployeesList() {
    if (this.employees.length === 0 || this.filterEmployee === undefined || this.filterEmployee.trim() === '') {
      return this.employees;
    }

    return this.employees.filter(
       v => v.name.toLocaleLowerCase().includes(this.filterEmployee.toLocaleLowerCase()) || 
            v.func.toLocaleLowerCase().includes(this.filterEmployee.toLocaleLowerCase()) ||
            v.company.toLocaleLowerCase().includes(this.filterEmployee.toLocaleLowerCase())
    );
  }

  createEmployee() {
    this.router.navigate(['/employees/form']);
  }

}
