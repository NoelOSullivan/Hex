import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhereComponent} from './where/where.component';

@NgModule({
  imports: [
    CommonModule],
  declarations: [
    WhereComponent],
  exports: [
    WhereComponent
  ]
})
export class WhereModule { }
