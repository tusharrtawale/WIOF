import { Component, Input, OnInit } from '@angular/core';
import { iNgoInFocus } from 'src/app/models/NgoInFocus';


@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.scss']
})
export class NgoComponent implements OnInit {
  @Input() ngoInFocus: iNgoInFocus;

  constructor() { }

  ngOnInit() {}
}
