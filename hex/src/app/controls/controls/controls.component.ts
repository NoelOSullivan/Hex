import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../services/controls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  manageButtonsSliderSubscription: Subscription;
  disableButtonSubscription: Subscription;
  enableButtonSubscription: Subscription;
  openButtonSliders: boolean;
  rightButtonDisabled: boolean;
  leftButtonDisabled: boolean;

  constructor(private controlsService: ControlsService) {
    this.manageButtonsSliderSubscription = controlsService.manageButtonSliders$.subscribe(
      open => {
        this.openButtonSliders = open;
      }
    )
    this.disableButtonSubscription = controlsService.disableButton$.subscribe(
      button => {
        this.disableButton(button);
      }
    )
    this.enableButtonSubscription = controlsService.enableButton$.subscribe(
      button => {
        this.enableButton(button);
      }
    )
  }

  ngOnInit() {
    this.rightButtonDisabled = true;
  }

  clickLeft() {
    this.controlsService.clickLeftButton();
  }

  clickRight() {
    this.controlsService.clickRightButton();
  }

  disableButton(button) {
    switch(button) {
      case "right":
        this.rightButtonDisabled = true;
        break;
      case "left":
        this.leftButtonDisabled = true;
        break;
    }
  }

  enableButton(button) {
    switch(button) {
      case "right":
        this.rightButtonDisabled = false;
        break;
      case "left":
        this.leftButtonDisabled = false;
        break;
    }
  }

}
