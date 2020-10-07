import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.scss','../../main-sections-shared-styles.scss']
})
export class WhenComponent implements OnInit {

  constructor(private dataService: DataService) { }

  private whenData: Object;
  public timelineElements: Object;

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

  setUpTimeline(menu) {
    var timelineElements = this.whenData["timeline-elements"];
    timelineElements.reverse();
    this.timelineElements = timelineElements;
  }

}
