import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(public googleAnalytics: AnalyticsService) {}

  ngOnInit(): void {
    AOS.refresh();
  }
}
