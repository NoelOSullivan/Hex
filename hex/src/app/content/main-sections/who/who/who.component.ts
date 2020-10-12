import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss','../../main-sections-shared-styles.scss']
})
export class WhoComponent implements OnInit {

  constructor(private controlsService:ControlsService) { }

  ngOnInit() {
    this.controlsService.manageScroller(false);
  }

}
