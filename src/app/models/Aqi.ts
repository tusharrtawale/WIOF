export class AqiResponse
{
    "status": string;
    "data": {
          idx:number;
          aqi:number;
          dominentpol:string;
          time:{
              v:number;
              s:Date;
              tz:string;
          },
          city:{
              name:string;
              url:string;
              geo:string[];
          },
          iaqi:any;
          forecast:any;
          }
    static getAqiParameters(aqiResponse:AqiResponse){
        return Object.entries(aqiResponse.data.iaqi);
    }
  }

