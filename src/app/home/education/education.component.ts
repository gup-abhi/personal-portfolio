import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  tab: String = "Master";
  constructor() { }

  ngOnInit(): void {
  }

  selectedTab(value: String) {
    this.tab = value;
  }
}
