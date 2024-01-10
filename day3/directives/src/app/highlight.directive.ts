import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
      this.ref.nativeElement.style.color = 'blue';
  }

}
