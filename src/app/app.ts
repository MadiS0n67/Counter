import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  count: number = 3;
  newMessage: string = '';
  messages: string[] = ['pierwsza wysłana wiadomość', 'druga wysłana wiadomość'];

  increment() { this.count++; }
  decrement() { this.count--; }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}