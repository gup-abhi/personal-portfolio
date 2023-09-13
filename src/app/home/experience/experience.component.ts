import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  tab: String = "TCS";
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  selectedTab(value: String) {
    this.tab = value;
  }
}
