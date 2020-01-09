import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url = 'http://10.10.10.140:811/api/UploadMandate/updatename';
  constructor(private http: HttpClient) { }

 createEmployee(employee: Employee): Observable<Employee> {
   const body=JSON.stringify(employee) ;
  //  alert(json);
  //  return this.http.post<Employee>(this.url + '', json);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  
  return this.http.post < Employee > ( this.url , body, {
      headers
  })
  }
}
