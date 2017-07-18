import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-required',
  templateUrl: './label-required.component.html',
  styleUrls: ['./label-required.component.css']
})
export class LabelRequiredComponent implements OnInit {

  @Input() showError: boolean;

  constructor() { }

  ngOnInit() {
  }

}
