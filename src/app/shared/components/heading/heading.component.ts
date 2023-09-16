import { Component, OnInit } from '@angular/core';
import { HeadingService } from '../../services/heading.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  heading: any = {}; 
  constructor(private service: HeadingService) { }

  ngOnInit(): void {
    this.service.getValue().subscribe((heading) => {
      this.heading = heading;
      console.log(`this.heading - ${JSON.stringify(this.heading)}`)
    });
  }
}
