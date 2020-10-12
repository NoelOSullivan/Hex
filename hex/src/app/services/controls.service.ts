import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ControlsService {

  constructor() { }

  private leftButtonClickSource = new Subject<string>();
  private rightButtonClickSource = new Subject<string>();
  private manageButtonSlidersSource = new Subject<boolean>();
  private disableButtonSource = new Subject<string>();
  private enableButtonSource = new Subject<string>();

  private scrollerOpen = new BehaviorSubject(false);
  currentOpenState = this.scrollerOpen.asObservable();

  leftButtonClick$ = this.leftButtonClickSource.asObservable();
  rightButtonClick$ = this.rightButtonClickSource.asObservable();
  manageButtonSliders$ = this.manageButtonSlidersSource.asObservable();
  disableButton$ = this.disableButtonSource.asObservable();
  enableButton$ = this.enableButtonSource.asObservable();

  manageScroller(openScroller:boolean) {
      this.scrollerOpen.next(openScroller);
      console.log("serv OPEN SCROLLER",openScroller);
  }

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