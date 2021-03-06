import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlbase: string = environment.urlbase;
  urluser: string = environment.user;
  urlFilter: string = environment.filter;
  constructor(private http: HttpClient) {}

  getUser(filter?: any) {
    return this.http
      .post(`${this.urlbase}${this.urluser}${this.urlFilter}`, filter)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getMe() {}
  register(body) {
    return this.http.post(`${this.urlbase}${this.urluser}`, body).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
