import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/data.service';
import { ControlsService } from '../../../../services/controls.service';

@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.scss','../../main-sections-shared-styles.scss']
})
export class WhenComponent implements OnInit {

  constructor(private dataService: DataService, private controlsService: ControlsService) { }

  private whenData: Object;
  public timelineYears: Object;

  ngOnInit() {
    this.getWhenData();
  }

  getWhenData() {
    this.dataService.getWhen().subscribe(
      data => { this.whenData = data },
      err => console.error("Error getting when timeline data", err),
      () => this.setUpTimeline(0)
    );
  }

  openScroller() {
    this.controlsService.manageScroller(true);
  }

  setUpTimeline(menu) {
    var timelineYears = this.whenData["timeline-years"];
    timelineYears.reverse();
    this.timelineYears = timelineYears;
    console.log("this.timelineYears", this.timelineYears);
    this.openScroller();
  }

}
