import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  urlbase = environment.urlbase;
  urlsubCategory = environment.subCategory;
  urlfilter = environment.filter;

  constructor(private http: HttpClient) {}

  getSubCategoryByFilter(filter: any) {
    return this.http
      .post(`${this.urlbase}${this.urlsubCategory}${this.urlfilter}`, filter)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
