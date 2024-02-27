import { Component, Inject, OnInit } from '@angular/core';
import { HeadingService } from './shared/services/heading.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterState,
} from '@angular/router';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AnalyticsService } from './shared/services/analytics.service';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Abhishek Gupta';
  // ParticlesConfig for a Galaxy Ring
  ParticlesConfig = {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: false,
        },
      },
      color: {
        value: ['#ffffff'], // Colors for particles
      },
      shape: {
        type: 'star', // Shape type set to 'star'
        stroke: {
          width: 0,
          color: '#000000',
        },
      },
      opacity: {
        value: 1.1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: true,
        },
      },
      size: {
        value: 3.5,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.5, // Adjust the speed of particles
        direction: 'bottom', // Make stars fall down
        random: true,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
    },
    retina_detect: true,
    background: {
      color: '#000000', // Background color of the canvas
    },
    detectRetina: true,
    fpsLimit: 60, // Adjust the frames per second limit
    motion: {
      reduce: {
        factor: 2, // Adjust the motion reduce factor
        value: true,
      },
    },
  };

  constructor(
    private headingService: HeadingService,
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private googleAnalytics: AnalyticsService
  ) {
    this.handleRouteEvents();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        console.log(`url - ${event.url}`);
        this.headingService.setValue(event.url);
      }
    });
  }

  ngOnInit() {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });

    particlesJS('particles-js', this.ParticlesConfig, function () {
      console.log('callback - particles.js config loaded');
    });
  }

  handleRouteEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(
          this.router.routerState,
          this.router.routerState.root
        ).join('-');
        // this.titleService.setTitle(title);

        console.log(
          `page_title - ${title} :: page_path - ${event.urlAfterRedirects} :: page_location - ${this.document.location.href}`
        );
        // gtag('event', 'page_view', {
        //   page_title: title,
        //   page_path: event.urlAfterRedirects,
        //   page_location: this.document.location.href,
        // });

        this.googleAnalytics.sendAnalyticPageView(
          event.urlAfterRedirects,
          title
        );
      }
    });
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }
}
