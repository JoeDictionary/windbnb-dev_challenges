import { Stay } from './../stay-card/stay.interface';
import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss'],
  animations: [],
})
export class StayListComponent implements OnInit {
  @Input('stays-data') stays: Stay;

  constructor() {}

  ngOnInit(): void {}
}
