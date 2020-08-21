import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.scss'],
})
export class SitemapPage implements OnInit {
  public blogDetails: Observable<Blog>;
  constructor() { }

  ngOnInit() {
  }

}
