import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private employee: any = {
    id: 1, name: 'Marcos', func: 'FED', company: 'Halliburton'
  };
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    
  }

}
