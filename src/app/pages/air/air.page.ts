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
  selector: "app-air",
  templateUrl: "./air.page.html",
  styleUrls: ["./air.page.scss"],
})
export class AirPage implements OnInit {
  blogs: Observable<Blog[]>;
  videos: Observable<Video[]>;
  elementName: string = ELEMENT_SELECT.AIR;

  constructor(
    private blogService: BlogService,
    private videoService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs(ELEMENT_BLOG_CATEGORY.AIR);
    this.videos = this.videoService.getYoutubePlaylist(
      ELEMENT_VIDEOS_PLAYLIST_ID.AIR
    );
  }
}
