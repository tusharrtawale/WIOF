import { Component, OnInit } from '@angular/core';
import { ExcelGeneratorService } from '../../../services/excel-generator.service';
import { SubscriptionService } from "../../../services/subscription.service";
import { Subscriber } from "../../../models/Subscriber";

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.page.html',
  styleUrls: ['./subscribers.page.scss'],
})
export class SubscribersPage implements OnInit {

  constructor(private _excelGenerator:ExcelGeneratorService, private _subscriptionService:SubscriptionService) { }

  sampleJson:any[]=[{'a':'apple','b':'ball'},{'a':'alarm','b':'bell'},{'a':'ant','b':'brush'},{'a':'accordion','b':'bicycle'}];
  subscribersJson:Subscriber[]=[];

  ngOnInit() {
    this.getSubscribers();
  }

  generateExcel(){
    this._excelGenerator.exportAsExcelFile(this.subscribersJson,"wiof_subscribers");    
  }
  getSubscribers() {
  this._subscriptionService.getSubscribers().subscribe(data => {
    this.subscribersJson = data;
    });
  }
}
