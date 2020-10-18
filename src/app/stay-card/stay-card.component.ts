import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stay-card',
  templateUrl: './stay-card.component.html',
  styleUrls: ['./stay-card.component.scss'],
})
export class StayCardComponent implements OnInit {
  constructor() {}
  @Input('superhost') superhost = false;

  // TODO Create component using content projection or @Input-properties????????

  ngOnInit(): void {}
}
