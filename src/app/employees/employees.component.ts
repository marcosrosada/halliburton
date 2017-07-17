import { EmployeesService } from './employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private employees: any[];
  
  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees = this.employeesService.getEmployees();
  }

}
