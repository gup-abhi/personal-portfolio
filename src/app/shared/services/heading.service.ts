import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  heading = new BehaviorSubject<String>('');
  urlHeadingMap: { [key: string]: any } = {
    '/about-me': "01. About Me",
    '/experience': "02. Experience",
    '/': "",
    '/projects': "03. Projects",
    '/contact': "04. Contact"
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
