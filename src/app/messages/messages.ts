import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class MessagesComponent {
  newMessage: string = '';
  messages: string[] = ['pierwsza wysłana wiadomość', 'druga wysłana wiadomość'];

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}