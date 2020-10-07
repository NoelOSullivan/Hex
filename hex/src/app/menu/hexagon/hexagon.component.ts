import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {

  @Input() content: string;
  @Input() hexNum: string;
  rolled: boolean;

  constructor() { }

  ngOnInit() { }

}