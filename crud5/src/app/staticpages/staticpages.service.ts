import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './register';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaticpagesService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://10.10.10.124:809//api/ActivityAdd/AngularManipulation';

  getAllEmployee(): Observable<Register> {
    const employee = { "Flag": "0" };
    const body = JSON.stringify(employee);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Register>(this.baseUrl, body, {
      headers
    });
  }

  createEmployee(employee: Register): Observable<Register> {
    console.log(employee);
    const body = JSON.stringify(employee);
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Register>(this.baseUrl, body, {
      headers
    });
  }

  editEmployeeById(employee: Register): Observable<Register> {
    const body = JSON.stringify(employee);
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Register>(this.baseUrl, body, {
      headers
    });
  }

  deleteEmployeeById(employee: Register): Observable<Register> {
    console.log(employee);
    const body = JSON.stringify(employee);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Register>(this.baseUrl, body, {
      headers
    });
  }

}
