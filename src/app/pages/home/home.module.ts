import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppCommonModule } from 'src/app/app-common.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { NgoComponent } from '../../components/ngo/ngo.component';
import { CourseInFocusComponent } from '../../components/course-in-focus/course-in-focus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AppCommonModule
  ],
  declarations: [HomePage, NgoComponent, CourseInFocusComponent]
})
export class HomePageModule {}
