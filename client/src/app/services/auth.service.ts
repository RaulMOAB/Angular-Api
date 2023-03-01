import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject(false);
  public isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient) { }

  login(username:string, password:string){
    const user: object = { username: username, password: password };
    return this.http
    .post('http://localhost:4000/login', user, {
      responseType: 'json',
    })
    .pipe(
      map((res) => {
        if (res !== null) {           
          this._isLoggedIn.next(true);
        }
        return res;
      })
    );
  }
}
