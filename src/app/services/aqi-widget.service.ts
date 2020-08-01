import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENDPOINTS } from '../app.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class AqiWidgetService {
  // https://api.waqi.info/feed/beijing/?token=655a2796ba9301e9aa31a2119528c6dfaa383f53

  constructor(private http: HttpClient) {}

  getAqi(city: String): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.AQI_WIDGET}/${city}/?token=${environment.aqi_api_key}`
    );
  }
}
