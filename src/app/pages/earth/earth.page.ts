import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ELEMENT_VIDEOS_PLAYLIST_ID, ELEMENT_BLOG_CATEGORY } from "src/app/app.constants";
import { BlogService } from "src/app/services/blog.service";
import { YoutubeVideoService } from "src/app/services/youtube-video.service";
import { Blog } from "../../models/Blog";
import { Video } from "../../models/Video";

@Component({
  selector: "app-earth",
  templateUrl: "./earth.page.html",
  styleUrls: ["./earth.page.scss"],
})
export class EarthPage implements OnInit {
  blogs: Observable<Blog[]>;
  videos: Observable<Video[]>;

  constructor(
    private blogService: BlogService,
    private videoService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs(ELEMENT_BLOG_CATEGORY.EARTH);
    this.videos = this.videoService.getYoutubePlaylist(
      ELEMENT_VIDEOS_PLAYLIST_ID.EARTH
    );
  }
}
