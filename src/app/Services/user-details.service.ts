import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailsModel } from '../Models/userDetails.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private _http:HttpClient) { }

  // saveUser(userDetails:UserDetailsModel):Observable<UserDetailsModel>{
  //   return this._http.post<UserDetailsModel>('http://localhost:3000/api/userdetails/',userDetails)
  // }
  // getUser(email:string):Observable<UserDetailsModel>{
  //   return this._http.get<UserDetailsModel>('http://localhost:3000/userdetails/',email)
  // }

}
