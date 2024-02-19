import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectDirectiveDirective } from './directive/effect-directive.directive';
import { TextLoopDirective } from './directive/text-loop.directive';
import { HeadingComponent } from './components/heading/heading.component';
import { IntersectionObserverDirective } from './directive/intersection-observer.directive';
import { InfiniteScrollDirective } from './directive/infinite-scroll.directive';

@NgModule({
  declarations: [
    EffectDirectiveDirective,
    TextLoopDirective,
    HeadingComponent,
    IntersectionObserverDirective,
    InfiniteScrollDirective,
  ],
  imports: [CommonModule],
  exports: [
    EffectDirectiveDirective,
    TextLoopDirective,
    HeadingComponent,
    IntersectionObserverDirective,
    InfiniteScrollDirective,
  ],
})
export class SharedModule {}
