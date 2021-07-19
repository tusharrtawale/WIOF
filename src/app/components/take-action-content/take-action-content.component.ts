import { Component, OnInit, Input } from '@angular/core';
import { TakeAction } from './take-action';

@Component({
  selector: 'app-take-action-content',
  templateUrl: './take-action-content.component.html',
  styleUrls: ['./take-action-content.component.scss']
})
export class TakeActionContentComponent implements OnInit {
  @Input() actionData: TakeAction;
  @Input() selectedElement: string;

  constructor() {}

  ngOnInit() {}
}
