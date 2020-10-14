import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ViewHomeComponent,
    HeaderHomeComponent,
    NavHomeComponent,
    FooterHomeComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
