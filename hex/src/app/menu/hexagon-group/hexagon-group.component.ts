import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ControlsService } from '../../services/controls.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'hexagon-group',
  templateUrl: './hexagon-group.component.html',
  styleUrls: ['./hexagon-group.component.scss']
})

export class HexagonGroupComponent implements OnInit, AfterViewInit {

  @ViewChild('menuRotate') menuRotate: ElementRef;

  private route: string;

  constructor(private dataService: DataService, private router: Router, private location: Location, private controlsService: ControlsService) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationStart) {
            if (event.url != '') {
              if (this.route !== event.url) {
                this.route = event.url;
                this.updateAfterBackForward();
              }
            } else {
              if (this.route !== '/') {
                this.route = '/';
                this.updateAfterBackForward();
              }
            }
          }
        });
  }

  public menuContent: Array<any>;
  public hexOpened: Array<any>;
  private allMenus: Object;
  public selected: number;
  private lastSelected: number;
  private menuRotation: number;
  public rolled: number;
  private hexagons: Array<any>;
  private onIntro: boolean;
  private menuAnimationFinished: boolean;

  ngOnInit() {

    this.getMenus();

    this.onIntro = true;

    this.hexOpened = [false, false, false, false, false, false];
    this.selected = null;
    this.lastSelected = 2;
    this.menuRotation = 0;

    this.menuAnimationFinished = false;

    this.changePage("/");

    for (let i = 0; i < 6; i++) {
      this.introHexagonWithDelay(i);
    }

    // Calls change of menu after menu intro
    setTimeout(() => {
      this.onIntro = false;
      this.changeMenu();
    }, 5000); //5000


  }

  ngAfterViewInit() {
    // Remember that 1 to 6 were inverted for the start animation. Order is 0,6,5,4,3,2,1
    this.hexagons = this.menuRotate.nativeElement.getElementsByClassName('hexagon-content-holder');
  }

  getMenus() {
    this.dataService.getMenus().subscribe(
      data => { this.allMenus = data },
      err => console.error("Error getting menus", err),
      () => this.setUpMenu(0)
    );
  }

  setUpMenu(menu) {
    this.menuContent = this.allMenus["menu_" + menu];
  }

  // Hexagons open/rotate one after the other
  introHexagonWithDelay(index) {
    let delayTime = index * 200 + 2000;
    let timeoutId = setTimeout(() => {
      this.hexOpened[index] = true;
    }, delayTime);
  }

  changeMenu() {
    this.hexOpened = [false, false, false, false, false, false]; // Menu closes
    setTimeout(() => {
      // After pause, open menu with new button content
      this.setUpMenu(1); // Change menu content. To do : refactor and clean up
      this.hexOpened = [true, true, true, true, true, true];
      // Initialise what page as landing page
      this.changePage("/what");
    }, 1000);
  }

  clickHexagon(hexIndex, location) {
    if (this.onIntro) return;
    this.manageMenu(hexIndex);
    this.changePage(location)
  }

  manageMenu(hexIndex) {
    if ((hexIndex !== 0) && (hexIndex !== null) && (hexIndex !== undefined)) {
      if (this.selected !== null) {
        this.lastSelected = this.selected;
      }

      let rotationToAdd = (this.lastSelected - hexIndex) * 60;
      if (hexIndex == 1 && (rotationToAdd == 300 || rotationToAdd == 240)) {
        rotationToAdd -= 360;
      }
      if (hexIndex == 2 && rotationToAdd == 240) {
        rotationToAdd -= 360;
      }
      if (hexIndex == 5 && rotationToAdd == -240) {
        rotationToAdd += 360;
      }
      if (hexIndex == 6 && (rotationToAdd == -300 || rotationToAdd == -240)) {
        rotationToAdd += 360;
      }

      this.menuRotation += rotationToAdd;

      if (rotationToAdd !== undefined) {
        this.rotateMenu();
      }
      this.selected = hexIndex;
    }
  }

  rotateMenu() {
    if (this.menuRotate) {
      this.menuRotate.nativeElement.style.transform = "rotate(" + this.menuRotation + "deg)"
      this.hexagonContentRotate();
    }
  }

  hexagonContentRotate() {
    // Keeps the contents of hexagons horizontal, as the menu turns.
    // Remember that 1 to 6 were inverted for the start animation. Order is 0,6,5,4,3,2,1
    this.hexagons[0].style.transform = "rotate(" + (this.menuRotation * -1) + "deg)";
    this.hexagons[1].style.transform = "rotate(" + (this.menuRotation + 240) + "deg)";
    this.hexagons[2].style.transform = "rotate(" + (this.menuRotation + 180) + "deg)";
    this.hexagons[3].style.transform = "rotate(" + (this.menuRotation + 120) + "deg)";
    this.hexagons[4].style.transform = "rotate(" + (this.menuRotation + 60) + "deg)";
    this.hexagons[5].style.transform = "rotate(" + (this.menuRotation) + "deg)";
    this.hexagons[6].style.transform = "rotate(" + (this.menuRotation - 60) + "deg)";
  }

  changePage(location) {
    this.router.navigate([location]);
  }

  overHexagon(index) {
    if (this.onIntro) return;
    this.rolled = index;
  }

  leaveHexagon(index) {
    if (this.onIntro) return;
    this.rolled = null;
  }

  /*
    Update component states where necessary after back/forward location change
  */

  updateAfterBackForward() {
    this.updateMenu();
  }

  updateMenu() {
    // this.controlsService.manageButtonSliders(false);
    console.log("this.route", this.route);
    switch (this.route) {
      case "/":
        this.rotateMenu();
        this.selected = null;
        console.log("this.selected", this.selected);
        this.lastSelected = 2;
        this.menuRotation = 0;
        break;
      case "/who":
        this.manageMenu(1);
        break;
      case "/what":
        this.manageMenu(2);
        break;
      case "/when":
        // this.controlsService.manageButtonSliders(true);
        this.manageMenu(3);
        break;
      case "/why":
        this.manageMenu(4);
        break;
      case "/how":
        this.manageMenu(5);
        break;
      case "/where":
        this.manageMenu(6);
        break;
    }
  }

}