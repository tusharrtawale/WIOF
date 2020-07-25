import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AQI_WIDGET_LOCATIONS } from "../../app.constants";
import { AqiWidgetService } from '../../services/aqi-widget.service';

@Component({
  selector: "app-aqi-widget",
  templateUrl: "./aqi-widget.component.html",
  styleUrls: ["./aqi-widget.component.scss"],
})
export class AqiWidgetComponent implements OnInit {
  //aqiwidget variables
  widgetMajorCities: boolean = true;
  widgetSearchCity: boolean = false;
  city: string;
  searchCityAqi: Observable<any>;
  searchClickFlag: boolean = false;
  aqiDelhi: Observable<any>;
  aqiMumbai: Observable<any>;
  aqiKolkata: Observable<any>;
  aqiBangalore: Observable<any>;
  aqiChennai: Observable<any>;

  loadMajorCitiesDiv() {
    this.widgetMajorCities = true;
    this.widgetSearchCity = false;
  }

  loadSearchCityDiv() {
    this.widgetMajorCities = false;
    this.widgetSearchCity = true;
  }

  loadCityAqiData() {
    this.searchCityAqi = this.aqiService.getAqi(this.city);
    this.searchClickFlag = true;
  }

  constructor(private aqiService: AqiWidgetService) {}

  ngOnInit() {
    this.aqiDelhi = this.aqiService.getAqi(AQI_WIDGET_LOCATIONS.DELHI);
    this.aqiMumbai = this.aqiService.getAqi(AQI_WIDGET_LOCATIONS.MUMBAI);
    this.aqiBangalore = this.aqiService.getAqi(AQI_WIDGET_LOCATIONS.BANGALORE);
    this.aqiChennai = this.aqiService.getAqi(AQI_WIDGET_LOCATIONS.CHENNAI);
    this.aqiKolkata = this.aqiService.getAqi(AQI_WIDGET_LOCATIONS.KOLKATA);
  }
}
