import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Register} from './register';
@Injectable({
  providedIn: 'root'
})
export class StaticpagesService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://10.10.10.141:811/WebService1.asmx/HelloWorld';

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<Register>(this.baseUrl + '/' + id);
  }

  createUser(user: Register) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: Register) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
