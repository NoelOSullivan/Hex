import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss','../../main-sections-shared-styles.scss']
})
export class WhatComponent implements OnInit {

  constructor(private controlsService:ControlsService) { }

  ngOnInit() {
    this.controlsService.manageScroller(false);
  }

}
