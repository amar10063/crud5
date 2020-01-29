import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Loginemployee } from './login/loginemployee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
 // url = 'http://10.10.10.140:811/api/UploadMandate/updatename';
 baseUrl = 'http://10.10.10.124:809//api/ActivityAdd/AngularManipulation';
  constructor(private http: HttpClient) { }

  // createEmployee(employee: Employee): Observable<Employee> {
  //   const body = JSON.stringify(employee);
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   return this.http.post<Employee>(this.url, body, {
  //     headers
  //   });
  // }
  loginemployee(loginEmployee: Loginemployee): Observable<Loginemployee> {
    console.log(loginEmployee);
    const body = JSON.stringify(loginEmployee);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Loginemployee>(this.baseUrl, body, {
      headers
    });
  }
}
