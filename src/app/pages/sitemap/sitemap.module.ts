import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SitemapPageRoutingModule } from './sitemap-routing.module';
import { SitemapPage } from './sitemap.page';
import { AppCommonModule } from 'src/app/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitemapPageRoutingModule,
    AppCommonModule
  ],
  declarations: [SitemapPage]
})
export class SitemapPageModule {}
