import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { YoutubeVideoService } from 'src/app/services/youtube-video.service';
import {Video} from "../../models/Video";
import {Blog} from '../../models/Blog';


@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.page.html',
  styleUrls: ['./spirit.page.scss'],
})
export class SpiritPage implements OnInit {
  blogs: Observable<Blog[]>;
  youtube_playlist:any;
  vids:Video[];
  vids_frontend:Observable<Video[]>;
  playlistIdForSpiritPage:String="PLitAAO2FhPTFjxy3EsgDR_XPtgiX8Ez-q";
  slideOpts = {
    slidesPerView: 5,
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  constructor(private blogService: BlogService,
    private videoService:YoutubeVideoService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs("Spirit");

    this.vids_frontend=this.videoService.getYoutubePlaylist(this.playlistIdForSpiritPage).pipe(map(data=>{
      this.youtube_playlist=data;
      let {items} = this.youtube_playlist;
      // (items.map(x=> {({snippet:{thumbnails:{"default":def_one},title}}=x);return ([def_one.url,title])}))
      this.vids=items.map(playlist_item=>({ video_thumbnail:playlist_item.snippet.thumbnails.default.url,
                                            video_title:playlist_item.snippet.title,
                                            video_link:playlist_item.snippet.resourceId.videoId
                                                      }));

        return this.vids; 
      }));  
  }

}
