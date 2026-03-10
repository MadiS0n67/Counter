import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent {
  count: number = 3;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}