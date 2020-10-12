import { Component, AfterViewInit, Input, ViewChild, ViewChildren, ElementRef } from '@angular/core';

import { ControlsService } from '../../../../services/controls.service';
import { Subscription } from 'rxjs';


import 'hammerjs';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class TimelineComponent implements AfterViewInit {

  @ViewChild('timelineScroller') timelineScroller: ElementRef;

  rightPosition = 0;
  startPositionX: number;
  animateScroller = true;
  wasSwiped = false;
  scrollerWidth: number;
  

  onResize() {
  }

  @Input() timelineYears: object;

  ngAfterViewInit(): void {
    this.scrollerWidth = this.timelineScroller.nativeElement.clientWidth;
    console.log("INIT this.scrollerWidth", this.scrollerWidth);
  }

  public onSwipeLeft(evt): void {
    this.wasSwiped = true;
    this.rightPosition -= 200 * evt.overallVelocityX * 2;
    if(this.rightPosition > 50) {
      this.rightPosition = 50;
    }
    this.timelineScroller.nativeElement.style.right = this.rightPosition + "px";   
  }

  public onSwipeRight(evt): void {
    this.wasSwiped = true;
    this.rightPosition -= 200 * evt.overallVelocityX * 2;
    console.log("this.rightPosition", this.rightPosition);
    if(this.rightPosition < (this.timelineScroller.nativeElement.clientWidth * -1) + (window.innerWidth - 70)) {
      this.rightPosition = (this.timelineScroller.nativeElement.clientWidth * -1) + (window.innerWidth - 70);
    }
    console.log("WIDTH",this.timelineScroller.nativeElement.clientWidth);
    this.timelineScroller.nativeElement.style.right = this.rightPosition + "px";  
  }

  public onPanStart(evt): void {
    this.animateScroller = false;
    this.startPositionX = evt.center.x;
  }

  public onPanMove(evt): void {
    let newPos = this.rightPosition + (this.startPositionX - evt.center.x);
    if(newPos > 50) {
      newPos = 50;
    }
    if(newPos < (this.timelineScroller.nativeElement.clientWidth * -1) + (window.innerWidth - 70)) {
      newPos = (this.timelineScroller.nativeElement.clientWidth * -1) + (window.innerWidth - 70);
    }
    this.timelineScroller.nativeElement.style.right = newPos + "px";  
  }

  public onPanEnd(evt): void {
      this.animateScroller = true;
      const newPos = this.rightPosition + (this.startPositionX - evt.center.x);
      this.rightPosition = newPos;
    // }
  }
  
}