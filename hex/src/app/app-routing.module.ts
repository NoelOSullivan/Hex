import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './content/main-sections/who/who/who.component';
import { WhatComponent } from './content/main-sections/what/what/what.component';
import { WhenComponent } from './content/main-sections/when/when/when.component';
import { WhereComponent } from './content/main-sections/where/where/where.component';
import { HowComponent } from './content/main-sections/how/how/how.component';
import { WhyComponent } from './content/main-sections/why/why/why.component';

const routes: Routes = [
  // { path: '',   redirectTo: '/what', pathMatch: 'full' },
  { path: 'who', component: WhoComponent },
  { path: 'what', component: WhatComponent },
  { path: 'when', component: WhenComponent },
  { path: 'where', component: WhereComponent },
  { path: 'how', component: HowComponent },
  { path: 'why', component: WhyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }