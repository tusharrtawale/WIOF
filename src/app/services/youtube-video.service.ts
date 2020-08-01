import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Video } from "../models/Video";
import { ENDPOINTS } from "../app.constants";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class YoutubeVideoService {
  constructor(private http: HttpClient) {}
  getYoutubeVideo(id: String) {
    return this.http.get(
      `${ENDPOINTS.YOUTUBE.VIDEO}?part=snippet&id=${id}&key=${environment.youtube_api_key}`
    );
  }

  getYoutubePlaylist(id: String) {
    return this.http
      .get<any>(
        `${ENDPOINTS.YOUTUBE.PLAYLIST}?part=snippet&maxResults=25&playlistId=${id}&key=${environment.youtube_api_key}`
      )
      .pipe(
        map((data) => {
          return data.items.map((playlist_item) => {
            return {
              thumbnail: playlist_item.snippet.thumbnails.medium.url,
              title: playlist_item.snippet.title,
              url: playlist_item.snippet.resourceId.videoId,
            } as Video;
          });
        })
      );
  }
}
