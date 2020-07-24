import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AqiWidgetService {
  // https://api.waqi.info/feed/beijing/?token=655a2796ba9301e9aa31a2119528c6dfaa383f53



  constructor(private http:HttpClient) { }

  getAqi(city:String):Observable<any>{
    return this.http.get(`https://api.waqi.info/feed/${city}/?token=655a2796ba9301e9aa31a2119528c6dfaa383f53`);
  }

}
