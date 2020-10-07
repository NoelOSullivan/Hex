import { Component, OnInit, Input, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { ControlsService } from '../../../../services/controls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class TimelineComponent implements OnInit {

  onResize() {
    this.animateTimeline = false;
    this.manageWidth();
    this.repositionScrollerLeft();
    this.manageButtonActivation();
  }

  leftButtonSubscription: Subscription;
  rightButtonSubscription: Subscription;

  nElements: number;
  nVisibleElements: number;
  rightMostElement: number; 
  viewWidth: number;
  openButtonSliders: boolean;
  animateTimeline: boolean;

  @Input() timelineElements: object;

  ngOnChanges(changes) {
    // this.nElements = this.timelineElements.length;
    this.repositionScrollerLeft();
    this.manageButtonActivation();
  }

  @ViewChild('timelineScroller') scroller: ElementRef;
  @ViewChild('timelineElement') element: ElementRef;

  constructor(private controlsService: ControlsService) {
    this.leftButtonSubscription = controlsService.leftButtonClick$.subscribe(
      click => {
        this.moveTimeline("left");
      }
    )
    this.rightButtonSubscription = controlsService.rightButtonClick$.subscribe(
      click => {
        this.moveTimeline("right");
      }
    )
  }

  ngOnInit() {
    this.rightMostElement = 1;
    this.onResize();
    this.animateTimeline = false;
  }

  manageWidth() {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth <= 600) {
      this.nVisibleElements = 1;
    } else {
      if (this.viewWidth <= 1000) {
        this.nVisibleElements = 2;
      } else {
        this.nVisibleElements = 3;
      }
    }
  }

  moveTimeline(direction) {
    this.animateTimeline = true;
    if(direction=="left") {
      this.rightMostElement += 1;
    } else {
      this.rightMostElement -= 1;
    }
    this.repositionScrollerLeft();
    this.manageButtonActivation();
  }

  repositionScrollerLeft() {
    setTimeout(() => {
      let elementWidth = this.element.nativeElement.offsetWidth;
      let scrollerWidth = this.scroller.nativeElement.offsetWidth;

      console.log("this.nElements", this.nElements);
      console.log("this.nVisibleElements", this.nVisibleElements);
      console.log("this.rightMostElement", this.rightMostElement);

      if (this.rightMostElement >= this.nElements - this.nVisibleElements + 1) {
        console.log("DO SOMETHING QUICK");
        this.rightMostElement = this.nElements - this.nVisibleElements + 1
      }

      let newLeft = -1 * (scrollerWidth - ((elementWidth * this.nVisibleElements) + (10 * this.nVisibleElements) + (elementWidth * (this.rightMostElement - 1) + (10 * (this.rightMostElement - 1)))));

      this.scroller.nativeElement.style.left = newLeft + "px";
    }, 0);
  }

  manageButtonActivation() {
    /*console.log("this.nElements", this.nElements);
    console.log("this.nVisibleElements", this.nVisibleElements);
    console.log("this.rightMostElement", this.rightMostElement);*/
    if (this.rightMostElement == 1) {
      this.controlsService.disableButton("right");
    } else {
      this.controlsService.enableButton("right");
    }
    if (this.rightMostElement >= this.nElements - this.nVisibleElements + 1) {
      this.controlsService.disableButton("left");
    } else {
      this.controlsService.enableButton("left");
    }
  }

}