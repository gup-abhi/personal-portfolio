import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  tab: String = "Master";
  constructor(public googleAnalytics: AnalyticsService) { }

  ngOnInit(): void {
  }

  selectedTab(value: String) {
    this.tab = value;
  }
}
