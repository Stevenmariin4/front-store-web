import { Component, OnInit } from '@angular/core';
import {
  ICategory,
  IResponseDataCategorys,
} from '@core/interfaces/category.interface';
import { AuthServiceService } from '@core/service/auth/auth-service.service';
import { CategoryService } from '@core/service/category/category.service';
import { LoginService } from '@core/service/login/login.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss'],
})
export class NavHomeComponent implements OnInit {
  category: Partial<ICategory>[];
  constructor(
    public authSessio: AuthServiceService,
    private login: LoginService,
    private categoryService: CategoryService
  ) {
    this.category = [];
  }

  async ngOnInit() {
    this.authSessio.LoggedRol();
    await this.getCategory();
  }

  logout() {
    this.login.logout().subscribe((data) => {
      if (data.error) {
        localStorage.removeItem('session');
      }
    });
  }

  getCategory() {
    const filter = {
      filter: {
        is_valid: 1,
      },
      limit: 16,
    };
    this.categoryService.getCategoryByFilter(filter).subscribe(
      (data: IResponseDataCategorys) => {
        data.body.rows.forEach((element) => {
          this.category.push({
            ca_name: element.ca_name,
            ca_id: element.ca_id,
          });
        });
      },
      (err) => {}
    );
  }
}
