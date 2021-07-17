import { Component, OnInit } from '@angular/core';
import { ExcelGeneratorService } from '../../../services/excel-generator.service';
import { SubscriptionService } from '../../../services/subscription.service';
import { Subscriber } from '../../../models/Subscriber';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.page.html',
  styleUrls: ['./subscribers.page.scss']
})
export class SubscribersPage implements OnInit {
  constructor(
    private _excelGenerator: ExcelGeneratorService,
    private _subscriptionService: SubscriptionService
  ) {}

  subscribersJson: Subscriber[] = [];

  ngOnInit() {
    this.getSubscribers();
  }

  generateExcel() {
    this._excelGenerator.exportAsExcelFile(
      this.subscribersJson,
      'wiof_subscribers'
    );
  }

  getSubscribers() {
    this._subscriptionService.getSubscribers().subscribe((data) => {
      const uniqueEmails = [];
      const subscribers = data.filter((s) => {
        if (!uniqueEmails.includes(s.email)) {
          uniqueEmails.push(s.email);
          return s;
        }
      });
      this.subscribersJson = subscribers.sort((a, b) =>
        `${a.firstName} ${a.lastName}` > `${b.firstName} ${b.lastName}` ? 1 : -1
      );
    });
  }
}
