import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ControlsService {

  constructor() { }

  private leftButtonClickSource = new Subject<string>();
  private rightButtonClickSource = new Subject<string>();
  private manageButtonSlidersSource = new Subject<boolean>();
  private disableButtonSource = new Subject<string>();
  private enableButtonSource = new Subject<string>();

  leftButtonClick$ = this.leftButtonClickSource.asObservable();
  rightButtonClick$ = this.rightButtonClickSource.asObservable();
  manageButtonSliders$ = this.manageButtonSlidersSource.asObservable();
  disableButton$ = this.disableButtonSource.asObservable();
  enableButton$ = this.enableButtonSource.asObservable();

  clickLeftButton() {
    this.leftButtonClickSource.next();
  }

  clickRightButton() {
    this.rightButtonClickSource.next();
  }

  manageButtonSliders(open) {
    this.manageButtonSlidersSource.next(open);
  }

  disableButton(button) {
    this.disableButtonSource.next(button);
  }

  enableButton(button) {
    this.enableButtonSource.next(button);
  }

}