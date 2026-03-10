import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../app.config';

@Component({
  selector: 'app-show-contact-requests',
  standalone: true,
  imports: [],
  templateUrl: './show-contact-requests.html'
})
export class ShowContactRequests implements OnInit {
  contacts: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const snapshot = await getDocs(collection(db, 'contactRequests'));
    this.contacts = snapshot.docs.map(doc => doc.data());
    this.cdr.detectChanges();
  }
}