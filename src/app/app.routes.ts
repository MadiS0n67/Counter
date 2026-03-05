import { Routes } from '@angular/router';

import { CounterComponent } from './counter/counter';
import { MessagesComponent } from './messages/messages';
import { AgeGuesserComponent } from './age-guesser/age-guesser';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'age-guesser', component: AgeGuesserComponent},
];