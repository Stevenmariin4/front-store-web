import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '@core/service/auth/auth-service.service';
import { LoginService } from '@core/service/login/login.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
})
export class HeaderHomeComponent implements OnInit {
  constructor(
    public authSessio: AuthServiceService,
    private login: LoginService
  ) {}

  ngOnInit(): void {}
}
