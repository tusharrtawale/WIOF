import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AQI_WIDGET_LOCATIONS } from "../../app.constants";
import { AqiWidgetService } from "../../services/aqi-widget.service";

@Component({
  selector: "app-aqi-widget",
  templateUrl: "./aqi-widget.component.html",
  styleUrls: ["./aqi-widget.component.scss"],
})
export class AqiWidgetComponent implements OnInit {
  majorLocations:string[];
  selectedLocation:string="mumbai";
  searchLocation:string;
  searchLocationClickedFlag:boolean=false;
  searchLocationTabSelect:boolean=false;
  showAqiScorecard:boolean=true;
  searchLocationResults;

  constructor(private aqiService: AqiWidgetService) {

  }

  ngOnInit() {
    this.majorLocations = ['mumbai', 'delhi', 'lucknow', 'bangalore'];
  }
  searchByLocation(){
    this.searchLocationResults = this.aqiService.search(this.searchLocation);
    console.log(this.searchLocation);
    this.searchLocationClickedFlag=true;
    this.showAqiScorecard=false;
  }
  loadSearchLocationDiv(){
    this.searchLocationTabSelect=true;
    this.showAqiScorecard=false;
  }

  loadMajorCitiesDiv(){
    this.searchLocationTabSelect=false;
  }
  expandLocationAqiDetails(locationUrl:string){
    this.selectedLocation=locationUrl;
    this.searchLocationClickedFlag=false;
    this.showAqiScorecard=true;
  }

  aqiColor(aqi: number) {
    let aqiLevelClass = "aqi-level-card ";
    if (aqi > 0 && aqi < 51) {
      aqiLevelClass += "aqi-good";
    } else if (aqi > 50 && aqi < 101) {
      aqiLevelClass += "aqi-moderate";
    } else if (aqi > 100 && aqi < 151) {
      aqiLevelClass += "aqi-unhealthy-for-sensitive";
    } else if (aqi > 150 && aqi < 201) {
      aqiLevelClass += "aqi-unhealthy";
    } else if (aqi > 200 && aqi < 300) {
      aqiLevelClass += "aqi-very-unhealthy";
    } else if (aqi > 300){
      aqiLevelClass += "aqi-hazardous";
    }
    else{
      aqiLevelClass += "aqi-na";
    }
    return aqiLevelClass;
  }
}

