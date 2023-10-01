import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit, AfterViewInit {

  constructor(private scroller: ElementRef) { 
    console.log(this.scroller);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.addAnimation();
    }
  }


  addAnimation(): void {
    this.scroller.nativeElement.setAttribute("data-animated", true);
    const children = this.scroller.nativeElement.children;
    console.dir(this.scroller.nativeElement.children);
    const scrollerInner = children[0];
    console.dir(scrollerInner);

    const scrollerInnerContent = Array.from(scrollerInner.children);
    scrollerInnerContent.forEach((item: any) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }
}
