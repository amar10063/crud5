import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Register} from './register';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaticpagesService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://10.10.10.124:809///api/ActivityAdd/InsertRegistration';

  createEmployee(employee: Register): Observable<Register> {
    const body=JSON.stringify(employee) ;
   //  alert(json);
   //  return this.http.post<Employee>(this.url + '', json);
   const headers = new HttpHeaders().set('content-type', 'application/json'); 
   return this.http.post < Register > ( this.baseUrl , body, {
       headers
   })
   }

  //  getEmployee(): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }

}
