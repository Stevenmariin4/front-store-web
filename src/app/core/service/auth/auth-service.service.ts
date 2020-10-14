import { Injectable } from '@angular/core';
import { ISession } from '@core/interfaces/session.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  roid: number = environment.idCliente;
  constructor() {}

  loggedIn() {
    return !!localStorage.getItem('session');
  }

  // tslint:disable-next-line: ban-types
  public LoggedRol(): Boolean {
    // tslint:disable-next-line: no-inferrable-types
    let role: boolean = false;
    const validate = JSON.parse(localStorage.getItem('session')) as ISession;

    if (!validate) {
      role = false;
      return;
    }
    if (validate.id !== this.roid) {
      role = true;
    } else {
      role = false;
    }

    return role;
  }
}
