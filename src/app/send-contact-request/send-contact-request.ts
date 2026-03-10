import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../app.config';

@Component({
  selector: 'app-send-contact-request',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './send-contact-request.html'
})
export class SendContactRequest {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  async onSubmit() {
    if (this.form.valid) {
      await addDoc(collection(db, 'contactRequests'), this.form.value);
      this.form.reset();
      alert('Wysłano!');
    }
  }
}