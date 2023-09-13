import { Component, OnInit } from '@angular/core';
import { HeadingService } from './shared/services/heading.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Abhishek Gupta';

  constructor(private headingService: HeadingService, private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar       
        console.log(`url - ${event.url}`);
         this.headingService.setValue(event.url);
    }
    });
  }

  ngOnInit() { 
    AOS.init();
   }
}
