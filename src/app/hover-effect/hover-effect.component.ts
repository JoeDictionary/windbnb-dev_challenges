import { rendererTypeName } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrls: ['./hover-effect.component.scss'],
})
export class HoverEffectComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  hostEl: HTMLElement = this.elRef.nativeElement;

  ngOnInit(): void {}
}
