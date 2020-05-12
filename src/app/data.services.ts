import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Data } from './data.model';
import {map} from 'rxjs/operators';
import { Helpline } from './helpline.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient){}

  getData(): Observable<Data>{
      return this.http.get<Data>("https://api.covid19india.org/data.json")
  }



  getHelplines():Observable<any[]>{
 
    return this.http.get<Helpline>("https://api.covid19india.org/resources/resources.json").pipe(map(res=>{
      let list =[];
      list = res.resources;
      return list;

    }))
  }

  getDistricts():Observable<any>{
    return this.http.get<any>("https://api.covid19india.org/state_district_wise.json");
  }

}