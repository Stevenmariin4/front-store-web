import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  urlbase = environment.urlbase;
  urlpromotion = environment.promotion;
  urlfilter = environment.filter;
  constructor(private http: HttpClient) {}

  getPromotionByFilter(filter: any) {
    return this.http
      .post(`${this.urlbase}${this.urlpromotion}${this.urlfilter}`, filter)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
