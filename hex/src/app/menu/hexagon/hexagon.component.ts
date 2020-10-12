import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ControlsService } from '../../services/controls.service';

@Component({
  selector: 'hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {

  // @ViewChild('menuMagic') menuMagic: ElementRef;
  // @ViewChild('topHalf') topHalf: ElementRef;
  // @ViewChild('bottomHalf') bottomHalf: ElementRef;

  // 


  @Input() content: string;
  @Input() hexNum: string;
  rolled: boolean;
  openState: boolean;

  constructor(private controlsService: ControlsService) { }

  ngOnInit() {
    // this.controlsService.currentOpenState.subscribe(state =>
    //   {
    //     console.log("this.openState",this.openState);
    //     this.openState = state;
    //   }
    //   );
  }

  ngOnChanges(changes: any) {
    if (changes.content.currentValue.indexOf("menuMagic") > -1) {
      setTimeout(() => {
        let menuMagic: HTMLElement = document.getElementsByClassName("menu-magic")[0] as HTMLElement;
        menuMagic.style.visibility = "visible";
        let topHalf: HTMLElement = document.getElementsByClassName("top-half")[0] as HTMLElement;
        let bottomHalf: HTMLElement = document.getElementsByClassName("bottom-half")[0] as HTMLElement;
        topHalf.style.backgroundColor = "#ffdb99";
        bottomHalf.style.background = "#ffdb99";
        this.controlsService.currentOpenState.subscribe(state => {
          this.openState = state;
          if (this.openState) {
            topHalf.style.top = "-26px";
            bottomHalf.style.top = "52px";
          } else {
            topHalf.style.top = "0px";
            bottomHalf.style.top = "26px";
          }
        });

      }, 1000);
    }
  }

}