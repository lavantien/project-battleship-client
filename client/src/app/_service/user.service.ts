import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { UserDTO } from '../_model/user-dto';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _globalService: GlobalService,
              private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const options = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this._http.get<User[]>(this._globalService.baseUrl + '/api/users', options);
  }

  createUser(user: UserDTO): Observable<User> {
    const options = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this._http.post<User>(this._globalService.baseUrl + '/api/users', JSON.stringify(user), options);
  }

  getUserById(id: number): Observable<User> {
    const options = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this._http.get<User>(this._globalService.baseUrl + '/api/users/' + id.toString, options);
  }

  updateUserById(id: number, user: User): Observable<User> {
    const params = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    const options = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this._http.put<User>(this._globalService.baseUrl + '/api/users/' + id.toString, params, options);
  }

  deleteUserById(id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this._http.delete<any>(this._globalService.baseUrl + '/api/users/' + id.toString, options);
  }

  searchUsersByUsername(username: string): Observable<User[]> {
    const options = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this._http.get<User[]>(this._globalService.baseUrl + '/api/users//' + username, options);
  }
}
