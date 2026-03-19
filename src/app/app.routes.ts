import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { CardInfo } from './features/card-info/card-info';
import { Login } from './pages/auth/login/login';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'model', component: CardInfo },
  { path: 'login', component: Login },
  { path: 'admin', component: Admin },
];
