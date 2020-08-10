import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http:HttpClient) {}

  getIp6(){
    return this.http.get('https://api6.ipify.org?format=json')
  }
  getIp4(){
    return this.http.get('https://api.ipify.org?format=json')
  }

}
