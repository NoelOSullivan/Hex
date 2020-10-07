import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatComponent} from './what/what.component';

@NgModule({
  imports: [
    CommonModule],
  declarations: [
    WhatComponent],
  exports: [
    WhatComponent]
})
export class WhatModule { }
