import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyComponent} from './why/why.component';

@NgModule({
  imports: [
    CommonModule],
  declarations: [
    WhyComponent],
  exports: [
    WhyComponent
  ]
})
export class WhyModule { }
