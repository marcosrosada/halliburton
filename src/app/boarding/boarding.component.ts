import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardingService } from './boarding.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {

  boardings: any[];
  filterBoarding: string;
  filterdtBoarding: string;
  filterdtLanding: string;
  
  constructor(
      private boardingsService: BoardingService,
      private router: Router
    ) { }

  ngOnInit() {
    this.boardings = this.boardingsService.getBoardings();
  }
  
  
  getBoardingsList() {
    if ((this.boardings.length === 0 || this.filterBoarding === undefined || this.filterBoarding.trim() === '') &&
        (this.filterdtBoarding === undefined) && (this.filterdtLanding === undefined) ) {
      return this.boardings;
    }

    if (this.filterBoarding) {
      return this.boardings.filter( boarding => boarding.employee.name.toLocaleLowerCase().includes(this.filterBoarding.toLocaleLowerCase()) );
    }
    
    if (this.filterdtBoarding) {
      return this.boardings.filter( boarding => {
          let dateBoarding:Date = new Date(boarding.dtBoarding),
              datefilter:Date = new Date(this.filterdtBoarding);
          return dateBoarding.getTime() >= datefilter.getTime();
      } );
    }
    if (this.filterdtLanding) {
      return this.boardings.filter( boarding => {
          let dateLanding:Date = new Date(boarding.dtLanding),
              datefilter:Date = new Date(this.filterdtLanding);
          return dateLanding.getTime() <= datefilter.getTime();
      } );
    }
  }

  createBoarding() {
    this.router.navigate(['/boarding/form']);
  }

}
