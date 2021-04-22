import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  ELEMENT_BLOG_CATEGORY,
  ELEMENT_SELECT,
  ELEMENT_VIDEOS_PLAYLIST_ID
} from "src/app/app.constants";
import { CoffeeConversation } from "src/app/models/CoffeeConversation";
import { BlogService } from "src/app/services/blog.service";
import { CoffeeConversationService } from "src/app/services/coffee-conversation.service";
import { YoutubeVideoService } from "src/app/services/youtube-video.service";
import { Blog } from "../../models/Blog";
import { Video } from "../../models/Video";

@Component({
  selector: "app-spirit",
  templateUrl: "./spirit.page.html",
  styleUrls: ["./spirit.page.scss"]
})
export class SpiritPage implements OnInit {
  blogs$: Observable<Blog[]>;
  videos$: Observable<Video[]>;
  coffeeConversations$: Observable<CoffeeConversation[]>;
  elementName: string = ELEMENT_SELECT.SPIRIT;

  constructor(
    private blogService: BlogService,
    private videoService: YoutubeVideoService,
    private coffeeConvService: CoffeeConversationService
  ) {}

  ngOnInit() {
    this.blogs$ = this.blogService.getBlogs(ELEMENT_BLOG_CATEGORY.SPIRIT);
    this.videos$ = this.videoService.getYoutubePlaylist(
      ELEMENT_VIDEOS_PLAYLIST_ID.SPIRIT
    );
    this.coffeeConversations$ = this.coffeeConvService.getCoffeeConversations(
      ELEMENT_BLOG_CATEGORY.SPIRIT
    );
  }
}
