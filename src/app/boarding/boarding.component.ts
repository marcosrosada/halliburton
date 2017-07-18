import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardingService } from './boarding.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {

  private boardings: any[];
  
  constructor(
      private boardingsService: BoardingService,
      private router: Router
    ) { }

  ngOnInit() {
    this.boardings = this.boardingsService.getBoardings();
  }

  createBoarding() {
    this.router.navigate(['/boarding/form']);
  }

}
