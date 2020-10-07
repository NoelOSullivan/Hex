import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowComponent} from './how/how.component';

@NgModule({
  imports: [
    CommonModule],
  declarations: [
    HowComponent],
  exports: [
    HowComponent]
})
export class HowModule { }
