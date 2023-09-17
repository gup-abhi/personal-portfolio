import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit {
  primaryHeader = document.querySelector('.navbar');
  scrollWatcher = document.createElement('div');
  navObserver = new IntersectionObserver((entries) => {
    this.primaryHeader?.classList.toggle('nav-shadow', !entries[0].isIntersecting)
  }, {
    rootMargin: "200px 0px 0px 0px"
  });

  constructor() { }

  ngOnInit() : void {
    console.log('Inside intersection observer directive');
    console.log(`primaryHeader - ${this.primaryHeader}`);
    this.scrollWatcher.setAttribute('data--scroll-watcher', '');
    this.primaryHeader?.before(this.scrollWatcher);
    this.navObserver.observe(this.scrollWatcher);
  }
}
