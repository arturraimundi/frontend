import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Auth } from './auth/auth';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: Auth}
];
