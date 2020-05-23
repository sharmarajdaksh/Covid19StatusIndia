import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserDetailsModel } from '../Models/userDetails.model';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private _http:HttpClient) { }

  saveUser(userDetails:UserDetailsModel):Observable<UserDetailsModel>{
    return this._http.post<UserDetailsModel>('http://localhost:3000/api/userdetails/',userDetails)
  }
  getUser(email:string):Observable<string>{
    let userParams= new HttpParams()
    userParams= userParams.append('email',email)
    return this._http.get<string>('http://localhost:3000/api/userdetails'+'/'+email)
  }
  updateUser(email:string,udModel:UserDetailsModel):Observable<any>{
    let url = 'http://localhost:3000/api/userdetails/' + email
    return this._http.patch<any>(url,{'testResult':udModel.testResult},{observe:'response'})
  }

}
  