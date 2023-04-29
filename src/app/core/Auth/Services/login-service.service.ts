import { LoginResponse } from './../Interfaces/login-response';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Interfaces/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl:string = "https://localhost:7276/"
  constructor(private http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  public LoginPost(login:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.baseUrl}api/Auth`,login,this.httpOptions).pipe(resp => resp,error => error)
  }
}
