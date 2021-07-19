import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/app-common.module';
import { BlogsPageRoutingModule } from './blogs-routing.module';
import { BlogsPage } from './blogs.page';

@NgModule({
  imports: [AppCommonModule, BlogsPageRoutingModule],
  declarations: [BlogsPage]
})
export class BlogsPageModule {}
