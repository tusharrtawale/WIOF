import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AqiWidgetService } from "../../services/aqi-widget.service";
import { AqiResponse } from "../../models/Aqi";

@Component({
  selector: 'app-aqi-scorecard',
  templateUrl: './aqi-scorecard.component.html',
  styleUrls: ['./aqi-scorecard.component.scss'],
})
export class AqiScorecardComponent implements OnInit {

  @Input() locationUrl:string;
  searchAqiData:Observable<any>;
  parameters:any; //change
  // searchAqiData:Observable<any>;

  constructor(private aqiService:AqiWidgetService) { }

  ngOnInit() {
  
  }

  ngOnChanges(){
    console.log(this.locationUrl);
    this.searchAqiData=this.aqiService.getAqi(this.locationUrl);
    this.aqiService.getAqi(this.locationUrl).subscribe(data=>{this.parameters=AqiResponse.getAqiParameters(data);});
    // this.searchAqiData=this.location;
    // console.log("aqi scorecard is arrived");
    

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
