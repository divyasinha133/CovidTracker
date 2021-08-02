import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
 
  getDistrict(){
    return this.http.get('https://api.covid19india.org/state_district_wise.json')
    }
  getState(){
    return this.http.get('https://api.covid19india.org/data.json')
  }
 

}
