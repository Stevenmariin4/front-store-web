import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResponse } from '@core/interfaces/login.interfaces';
import { ISession } from '@core/interfaces/session.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlbase: string = environment.urlbase;
  urlLlogin: string = environment.login;
  constructor(private http: HttpClient) {}

  public sigin(body): Observable<ILoginResponse> {
    return this.http.post(`${this.urlbase}${this.urlLlogin}`, body).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public logout(): Observable<ILoginResponse> {
    const token = localStorage.getItem('session') as ISession;
    return this.http.get(`${this.urlbase}${this.urlLlogin}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
