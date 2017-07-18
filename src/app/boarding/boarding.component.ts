import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardingService } from './boarding.service';
import { EmployeesService } from './../employees/employees.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {

  private boardings: any[];
  
  constructor(
      private boardingsService: BoardingService,
      private employeesService: EmployeesService,
      private router: Router
    ) { }

  ngOnInit() {
    this.boardings = this.boardingsService.getBoardings();
    console.log(this.employeesService.getEmployees());
     
  }

  createBoarding() {
    this.router.navigate(['/boarding/form']);
  }

}
