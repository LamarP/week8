import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appOptimialHighlight]'
})
export class OptimialHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'yellow';
  @Input('appOptimialHighlight') highlightColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event: Event) {
    console.log('check event');
    console.log(event);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') helloWow() {
    this.backgroundColor = this.defaultColor;
  }
}
