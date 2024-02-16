import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUrl: string | undefined;
  constructor(
    public googleAnalytics: AnalyticsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  isActive(url: string): boolean {
    return this.currentUrl === url;
  }

  downloadFile() {
    saveAs('./assets/Resume.pdf', 'Abhishek_Gupta.pdf');
  }
}
