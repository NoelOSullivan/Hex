import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoComponent} from './who/who.component';

@NgModule({
  imports: [
    CommonModule],
  declarations: [
    WhoComponent],
  exports: [
    WhoComponent
  ]
})
export class WhoModule { }
