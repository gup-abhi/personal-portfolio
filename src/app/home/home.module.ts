import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { EffectDirectiveDirective } from '../shared/directive/effect-directive.directive';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    BannerComponent,
    ExperienceComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BannerComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
