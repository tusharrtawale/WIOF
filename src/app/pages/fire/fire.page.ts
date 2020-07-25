import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  ELEMENT_BLOG_CATEGORY,
  ELEMENT_SELECT,
  ELEMENT_VIDEOS_PLAYLIST_ID,
} from "src/app/app.constants";
import { BlogService } from "src/app/services/blog.service";
import { YoutubeVideoService } from "src/app/services/youtube-video.service";
import { Blog } from "../../models/Blog";
import { Video } from "../../models/Video";

@Component({
  selector: "app-fire",
  templateUrl: "./fire.page.html",
  styleUrls: ["./fire.page.scss"],
})
export class FirePage implements OnInit {
  blogs: Observable<Blog[]>;
  videos: Observable<Video[]>;
  elementName: String = ELEMENT_SELECT.FIRE;

  constructor(
    private blogService: BlogService,
    private videoService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs(ELEMENT_BLOG_CATEGORY.FIRE);
    this.videos = this.videoService.getYoutubePlaylist(
      ELEMENT_VIDEOS_PLAYLIST_ID.FIRE
    );
  }
}
