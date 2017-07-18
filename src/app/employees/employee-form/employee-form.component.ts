import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private employee: any = {
    id: 1, name: 'Marcos', func: 'FED', company: 'Halliburton'
  };
  
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
