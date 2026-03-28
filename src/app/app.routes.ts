import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { CardInfo } from './features/card-info/card-info';
import { Login } from './pages/auth/login/login';
import { Admin } from './pages/admin/admin';
import { Wishlist } from './pages/wishlist/wishlist';
import { Register } from './pages/auth/register/register';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Moderation } from './pages/moderation/moderation';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'model', component: CardInfo },
  { path: 'admin', component: Admin },
  { path: 'moderation', component: Moderation },
  { path: 'wishlist', component: Wishlist },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
];
