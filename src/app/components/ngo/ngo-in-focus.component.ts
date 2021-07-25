import { Component, Input, OnInit } from '@angular/core';
import { NgoInFocus } from 'src/app/models/NgoInFocus';

@Component({
  selector: 'app-ngo-in-focus',
  templateUrl: './ngo-in-focus.component.html',
  styleUrls: ['./ngo-in-focus.component.scss']
})
export class NgoInFocusComponent implements OnInit {
  @Input() ngoInFocus: NgoInFocus;

  constructor() {}

  ngOnInit() {}
}
