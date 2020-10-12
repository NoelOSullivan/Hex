import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss','../../main-sections-shared-styles.scss']
})
export class WhyComponent implements OnInit {

  constructor(private controlsService:ControlsService) { }

  ngOnInit() {
    this.controlsService.manageScroller(false);
  }

}
