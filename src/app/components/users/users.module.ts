import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUpdateUsersComponent } from './components/create-update-users/create-update-users.component';


@NgModule({
  declarations: [ListUsersComponent, CreateUpdateUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
