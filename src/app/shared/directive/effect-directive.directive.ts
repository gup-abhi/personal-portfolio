import { AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEffectDirective]'
})
export class EffectDirectiveDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    console.log(`Directive`);
  }

  ngAfterViewInit() {
 
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.rotateElement(event, this.el);
  }

  rotateElement(event: MouseEvent, element: ElementRef) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // console.log(`x - ${x} :: y - ${y}`);

    // find the middle of the page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get offset from the middle
    const offsetX = ((x - middleX) / middleX) * 35;
    const offsetY = ((y - middleY) / middleY) * 35;

    // console.log(`offsetX - ${offsetX} :: offsetY - ${offsetY}`);
    this.el.nativeElement.style.setProperty('--rotateX', `${-1 * offsetY}deg`);
    this.el.nativeElement.style.setProperty('--rotateY', `${offsetX}deg`);
  }
}
