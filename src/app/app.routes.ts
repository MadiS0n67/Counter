import { Routes } from '@angular/router';

import { CounterComponent } from './counter/counter';
import { MessagesComponent } from './messages/messages';
import { AgeGuesserComponent } from './age-guesser/age-guesser';
import { SendContactRequest } from './send-contact-request/send-contact-request';
import { ShowContactRequests } from './show-contact-requests/show-contact-requests';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'age-guesser', component: AgeGuesserComponent },
  { path: 'send', component: SendContactRequest },
  { path: 'show', component: ShowContactRequests },
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
];