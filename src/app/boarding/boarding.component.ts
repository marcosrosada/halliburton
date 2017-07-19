import { Boarding } from './boarding.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardingService } from './boarding.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {

  boardings: Boarding[];
  filterBoarding: string;
  filterdtBoarding: string;
  filterdtLanding: string;
  
  constructor(
      private boardingService: BoardingService,
      private router: Router
    ) { }

  ngOnInit() {
    this.boardings = this.boardingService.getBoardings();
  }
  
  
  getBoardingsList() {
    if ((this.boardings.length === 0 || this.filterBoarding === undefined || this.filterBoarding.trim() === '') &&
        (this.filterdtBoarding === undefined) && (this.filterdtLanding === undefined) ) {
      return this.boardings;
    }

    
    
    if (this.filterBoarding && this.filterdtBoarding && this.filterdtLanding) {
      return this.boardings.filter( boarding => {
          let dateBoarding:Date = new Date(boarding.dtBoarding),
              dateLanding:Date = new Date(boarding.dtLanding),
              datefilterB:Date = new Date(this.filterdtBoarding),
              datefilterL:Date = new Date(this.filterdtLanding);

              datefilterL.setDate(datefilterL.getDate() + 1);
          return boarding.employee.name.toLocaleLowerCase().includes(this.filterBoarding.toLocaleLowerCase()) && 
                  dateBoarding >= datefilterB && dateLanding < datefilterL;
      } );
    }
    else if (this.filterBoarding) {
      return this.boardings.filter( boarding => boarding.employee.name.toLocaleLowerCase().includes(this.filterBoarding.toLocaleLowerCase()) );
    }
    else if (this.filterdtBoarding && this.filterdtLanding) {
      return this.boardings.filter( boarding => {
          let dateBoarding:Date = new Date(boarding.dtBoarding),
              dateLanding:Date = new Date(boarding.dtLanding),
              datefilterB:Date = new Date(this.filterdtBoarding),
              datefilterL:Date = new Date(this.filterdtLanding);

              datefilterL.setDate(datefilterL.getDate() + 1);
          return dateBoarding >= datefilterB && dateLanding < datefilterL;
      } );
    }
    else if (this.filterdtBoarding) {
      return this.boardings.filter( boarding => {
          let dateBoarding:Date = new Date(boarding.dtBoarding),
              datefilterL:Date = new Date(this.filterdtBoarding);
          return dateBoarding >= datefilterL;
      } );
    }
    else if (this.filterdtLanding) {
      return this.boardings.filter( boarding => {
          let dateLanding:Date = new Date(boarding.dtLanding),
              datefilter:Date = new Date(this.filterdtLanding);

              datefilter.setDate(datefilter.getDate() + 1);
          return dateLanding < datefilter;
      } );
    }
  }

  createBoarding() {
    this.router.navigate(['/boarding/form']);
  }

}
