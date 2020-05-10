import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Data } from './data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient){}

  getData(): Observable<Data>{
      return this.http.get<Data>("https://api.covid19india.org/data.json")
  }

}