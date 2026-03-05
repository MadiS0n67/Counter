import { Routes } from '@angular/router';

import { CounterComponent } from './counter/counter';
import { MessagesComponent } from './messages/messages';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: 'counter', pathMatch: 'full' }
];