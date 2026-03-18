import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { CardInfo } from './features/card-info/card-info';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'model', component: CardInfo },
];
