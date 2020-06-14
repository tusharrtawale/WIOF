import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementPageRoutingModule } from './element-routing.module';

import { ElementPage } from './element.page';
import { LifeElementsComponent } from 'src/app/components/life-elements/life-elements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementPageRoutingModule
  ],
  declarations: [ElementPage, LifeElementsComponent]
})
export class ElementPageModule {}
