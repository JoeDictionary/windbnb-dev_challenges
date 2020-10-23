import { Stay } from './stay.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[stay-card]',
  templateUrl: './stay-card.component.html',
  styleUrls: ['./stay-card.component.scss'],
})
export class StayCardComponent implements OnInit {
  @Input('stay-data') data: Stay;
  constructor() {}
  ngOnInit(): void {}
}
