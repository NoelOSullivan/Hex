import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss','../../main-sections-shared-styles.scss']
})
export class HowComponent implements OnInit {

  constructor(private controlsService:ControlsService) { }

  ngOnInit() {
    this.controlsService.manageScroller(false);
  }

}
