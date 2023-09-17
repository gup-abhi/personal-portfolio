import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectDirectiveDirective } from './directive/effect-directive.directive';
import { TextLoopDirective } from './directive/text-loop.directive';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
  declarations: [EffectDirectiveDirective, TextLoopDirective, HeadingComponent],
  imports: [
    CommonModule
  ],
  exports: [EffectDirectiveDirective, TextLoopDirective, HeadingComponent]
})
export class SharedModule { }
