import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public googleAnalytics: AnalyticsService) { }

  ngOnInit(): void {
  }


  downloadFile() {
    saveAs("./assets/Resume.pdf", "Abhishek_Gupta.pdf");
  }
}
