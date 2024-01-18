import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  register(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/register',
      data
    );
  }
  login(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/login',
      data
    );
  }
}
