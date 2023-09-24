import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private httpClient: HttpClient) { }

  getIPAddress(){
    return this.httpClient.get("http://api.ipify.org/?format=json");
  }
}
