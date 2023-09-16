import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  heading = new BehaviorSubject<String>('');
  urlHeadingMap: { [key: string]: any } = {
    '/about-me': {
      "num": "01. ",
      "title": "About Me"
    },
    '/experience': {
      "num": "02. ",
      "title": "Experience"
    },
    '/education': {
      "num": "03. ",
      "title": "Education"
    },
    '/projects': {
      "num": "04. ",
      "title": "Projects"
    },
    '/contact': {
      "num": "05. ",
      "title": "Contact"
    },
    '/': {},
  }
  constructor() { }

  setValue(value: string) {
    let url = this.urlHeadingMap[value];
    this.heading.next(url);
  }

  getValue() {
    return this.heading.asObservable();
  }
}
