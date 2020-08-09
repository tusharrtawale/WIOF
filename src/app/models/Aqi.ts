export interface AqiResponse {
  status: string;
  data: AqiResponseData;
}

export interface AqiResponseData {
  idx: number;
  aqi: number;
  dominentpol: string;
  time: {
    v: number;
    s: Date;
    tz: string;
  };
  city: {
    name: string;
    url: string;
    geo: string[];
  };
  iaqi: any;
  forecast: any;
}