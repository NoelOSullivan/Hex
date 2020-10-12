import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhenComponent} from './when/when.component';
import { TimelineComponent} from "./timeline/timeline.component";
import { ManetteComponent } from '../../../components/manette/manette.component';
 
@NgModule({
  imports: [
    CommonModule],
  declarations: [
    WhenComponent,
    TimelineComponent,
    ManetteComponent],
  exports : [
    WhenComponent,
    TimelineComponent,
    ManetteComponent
  ]
})
export class WhenModule { }
