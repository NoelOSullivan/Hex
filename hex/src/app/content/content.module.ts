import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoModule} from './main-sections/who/who.module';
import { WhatModule} from './main-sections/what/what.module';
import { WhenModule} from './main-sections/when/when.module';
import { WhereModule} from './main-sections/where/where.module';
import { HowModule} from './main-sections/how/how.module';
import { WhyModule} from './main-sections/why/why.module';

@NgModule({
  imports: [
    CommonModule,
    WhoModule,
    WhatModule,
    WhenModule,
    WhereModule,
    HowModule,
    WhyModule
  ],
  declarations: [],
  exports: [],
})
export class ContentModule { }
