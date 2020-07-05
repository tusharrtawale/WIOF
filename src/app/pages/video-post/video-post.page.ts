import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { YoutubeVideoService } from "../../services/youtube-video.service";

@Component({
  selector: "app-video-post",
  templateUrl: "./video-post.page.html",
  styleUrls: ["./video-post.page.scss"],
})
export class VideoPostPage implements OnInit {
  videoUrl: string = "";
  urlSafe: SafeResourceUrl;
  id: String;
  video: any;
  vid: any;
  videoTitle: String;
  videoPlayerHeight: Number;
  videoPlayerWidth: Number;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private videoService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has("videoId")) {
        this.id = params.get("videoId");
        this.videoUrl = `https://www.youtube.com/embed/${this.id}?controls=1`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.videoUrl
        );
        // console.log("Video:",this.urlSafe)
        this.videoService.getYoutubeVideo(this.id).subscribe((data) => {
          this.video = data;
          let { items } = this.video;

          items.map((itemData) => {
            this.vid = itemData;
            let { snippet } = this.vid;
            this.videoTitle = snippet.title;
            this.videoPlayerHeight = snippet.thumbnails.standard.height;
            this.videoPlayerWidth = snippet.thumbnails.standard.width;
            console.log(
              snippet,
              "height: ",
              snippet.thumbnails.standard.height,
              "width: ",
              snippet.thumbnails.standard.width
            );
            console.log(snippet.description, "\ntitle: ", snippet.title);
          });
        });
      }
    });
  }
}
