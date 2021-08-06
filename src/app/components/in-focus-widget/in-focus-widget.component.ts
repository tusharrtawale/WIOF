import { Component, OnInit, Input } from '@angular/core';
import { InFocus } from 'src/app/models/InFocus';
import { AppUtilService } from 'src/app/util/AppUtilService';

@Component({
  selector: 'app-in-focus-widget',
  templateUrl: './in-focus-widget.component.html',
  styleUrls: ['./in-focus-widget.component.scss']
})
export class InFocusWidgetComponent implements OnInit {
  @Input() element: string;
  @Input() inFocus: InFocus;
  inFocusClass: string;

  constructor(private appUtilService: AppUtilService) {}

  ngOnInit() {
    this.appUtilService.stopVideos();
    this.inFocusClass = `wiof-${this.element}`;
  }
}
