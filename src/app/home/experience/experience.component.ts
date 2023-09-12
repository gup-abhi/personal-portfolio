import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  tab: String = "TCS";
  constructor() { }

  ngOnInit(): void {
  }

  selectedTab(value: String) {
    this.tab = value;
  }
}
