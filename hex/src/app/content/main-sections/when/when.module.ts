import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhenComponent} from './when/when.component';
import { TimelineComponent} from "./timeline/timeline.component";
 
@NgModule({
  imports: [
    CommonModule],
  declarations: [
    WhenComponent,
    TimelineComponent],
  exports : [
    WhenComponent,
    TimelineComponent
  ]
})
export class WhenModule { }
