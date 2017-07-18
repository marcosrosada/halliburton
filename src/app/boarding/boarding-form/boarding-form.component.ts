import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardingService } from './../boarding.service';
@Component({
  selector: 'app-boarding-form',
  templateUrl: './boarding-form.component.html',
  styleUrls: ['./boarding-form.component.css']
})
export class BoardingFormComponent implements OnInit {

  private boarding: any = {
    id: 1, name: 'Marcos', func: 'FED', company: 'Halliburton'
  };
  
  constructor(
      private boardingService: BoardingService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.boardingService.createBoarding(form.value);
    
    this.router.navigate(['/boarding']);
  }

  checkValidTouched(field) {
      return !field.valid && field.touched;
  }

}
