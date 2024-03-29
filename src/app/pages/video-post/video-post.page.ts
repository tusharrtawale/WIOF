import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoService } from '../../services/youtube-video.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { YOUTUBE_EMBED_VIDEO_LINK } from 'src/app/app.constants';

@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.page.html',
  styleUrls: ['./video-post.page.scss']
})
export class VideoPostPage implements OnInit, OnDestroy {
  videoUrl: string = '';
  urlSafe: SafeResourceUrl;
  id: string;
  video: any;
  vid: any;
  videoTitle: string;
  videoChannelName: string;
  videoDescription: string;
  destroy$: Subject<boolean> = new Subject();
  showFullVideoDescription: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private videoService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('videoId')) {
        this.id = params.get('videoId');
        this.videoUrl = YOUTUBE_EMBED_VIDEO_LINK.replace('VIDEO_ID', this.id);
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.videoUrl
        );
        this.videoService
          .getYoutubeVideo(this.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe((data) => {
            this.video = data;
            let { items } = this.video;

            items.map((itemData) => {
              this.vid = itemData;
              let { snippet } = this.vid;
              this.videoTitle = snippet.title;
              this.videoDescription = snippet.description;
              this.videoChannelName = snippet.title;
            });
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleVideoDescription() {
    this.showFullVideoDescription = !this.showFullVideoDescription;
  }
}
