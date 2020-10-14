import { ViewHomeComponent } from '@components/home/components/view-home/view-home.component';
import { HomeModule } from '@components/home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: ViewHomeComponent,
    children: [
      {
        path: 'Home',
        loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/view',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home/view',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
