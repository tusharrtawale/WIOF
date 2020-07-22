import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ELEMENT_VIDEOS_PLAYLIST_ID, ELEMENT_BLOG_CATEGORY, ELEMENT_SELECT } from "src/app/app.constants";
import { BlogService } from "src/app/services/blog.service";
import { YoutubeVideoService } from "src/app/services/youtube-video.service";
import { Blog } from "../../models/Blog";
import { Video } from "../../models/Video";

@Component({
  selector: "app-spirit",
  templateUrl: "./spirit.page.html",
  styleUrls: ["./spirit.page.scss"],
})
export class SpiritPage implements OnInit {
  blogs: Observable<Blog[]>;
  videos: Observable<Video[]>;
  elementName:String=ELEMENT_SELECT.SPIRIT;


  constructor(
    private blogService: BlogService,
    private videoService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs(ELEMENT_BLOG_CATEGORY.SPIRIT);
    this.videos = this.videoService.getYoutubePlaylist(
      ELEMENT_VIDEOS_PLAYLIST_ID.SPIRIT
    );
  }
}
