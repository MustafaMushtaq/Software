import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.placement = 'left-top';
  }

  loader: boolean = true;
  interval: number = 2000;

  ngOnInit() {
    setTimeout(() => { this.loader = false; }, this.interval);
  }

}
