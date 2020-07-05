import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideoService {

  constructor(private http:HttpClient) { }
  getYoutubeVideo(id:String){
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBolQt2dn0W30MV8zA9G348zT8lVs_wTPA`);
  }

  getYoutubePlaylist(id:String){
    // let youtube_playlist:any;    
    // var uploadsId="";
    // return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLvahqwMqN4M0GRkZY8WkLZMb6Z-W7qbLA&key=AIzaSyBolQt2dn0W30MV8zA9G348zT8lVs_wTPA')
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${id}&key=AIzaSyBolQt2dn0W30MV8zA9G348zT8lVs_wTPA`)

  }
}
