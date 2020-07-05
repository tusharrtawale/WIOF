import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from "src/app/app-common.module";


import { IonicModule } from '@ionic/angular';

import { VideoPostPageRoutingModule } from './video-post-routing.module';

import { VideoPostPage } from './video-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPostPageRoutingModule,
    AppCommonModule

  ],
  declarations: [VideoPostPage]
})
export class VideoPostPageModule {}
