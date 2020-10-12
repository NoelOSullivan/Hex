import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss','../../main-sections-shared-styles.scss']
})
export class WhereComponent implements OnInit {

  constructor(private controlsService:ControlsService) { }

  ngOnInit() {
    this.controlsService.manageScroller(false);
  }

}
