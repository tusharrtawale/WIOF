import { Component, OnInit } from '@angular/core';
import { ELEMENTS } from '../../app.constants';
import { TAKE_ACTION_DATA } from './take-action-data';
import { PAGE_CATEGORY_MAP } from '../../app.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-action',
  templateUrl: './take-action.page.html',
  styleUrls: ['./take-action.page.scss']
})
export class TakeActionPage implements OnInit {
  ELEMENTS = ELEMENTS;
  element: string;
  actions = TAKE_ACTION_DATA;
  selectedElement = 'earth';
  elemetTabIndex: number;
  elements = ['earth', 'energy', 'air', 'water', 'spirit'];

  constructor(private route: ActivatedRoute) {
    const url_array = this.route.snapshot['_routerState'].url.split('/');
    this.selectedElement = url_array[2];
    this.onLoadGetElementIndex();
  }

  ngOnInit() {}

  onLoadGetElementIndex() {
    this.elemetTabIndex = this.elements.indexOf(this.selectedElement);
  }

  onSelectTab(event) {
    this.selectedElement = this.elements[event.index];
  }

  isSelectedTab(tabLabel: string) {
    return tabLabel.toLowerCase() === this.selectedElement;
  }
}
