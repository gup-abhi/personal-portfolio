import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  tab: String = "TCS";
  constructor(public googleAnalytics: AnalyticsService) { }

  ngOnInit(): void {
  }

  selectedTab(value: String) {
    this.tab = value;
  }
}
