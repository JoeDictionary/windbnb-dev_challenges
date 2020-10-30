import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'expand-button',
  templateUrl: './expand-button.component.html',
  styleUrls: ['./expand-button.component.scss'],
  animations: [
    trigger('inOut', [
      state(
        'false',
        style({
          width: '38px',
        })
      ),
      state(
        'true',
        style({
          width: '110px',
        })
      ),
      transition('false <=> true', [animate('250ms ease-in')]),
    ]),
    /* trigger('inOut', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' })),
      ]),
      transition('* => void', [
        style({ transform: 'translateX(0)' }),
        animate('500ms', style({ transform: 'translateX(-100%)' })),
      ]),
    ]), */
  ],
})
export class ExpandButtonComponent implements OnInit {
  constructor() {}
  isFocused = false;

  ngOnInit(): void {}
}
