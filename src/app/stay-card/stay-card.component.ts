import { Stay } from './stay.interface';
import { Component, Input, OnInit } from '@angular/core';
import stayData from '../../example_data/stays.json';

@Component({
  selector: 'stay-card',
  templateUrl: './stay-card.component.html',
  styleUrls: ['./stay-card.component.scss'],
})
export class StayCardComponent implements OnInit {
  @Input('superhost') superhost: boolean;
  @Input('data') data: Stay = stayData[2];

  constructor() {}

  // TODO Create component using content projection or @Input-properties????????
  ngOnInit(): void {
    console.log();
  }
}
