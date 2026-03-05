import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AgifyService } from '../agify';

@Component({
  selector: 'app-age-guesser',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './age-guesser.html',
  styleUrl: './age-guesser.css'
})
export class AgeGuesserComponent {
  userName: string = '';
  searchedName: string = '';
  guessedAge: number | null = null;

  constructor(
    private agifyService: AgifyService,
    private cdr: ChangeDetectorRef
  ) {}

  checkAge() {
    if (this.userName) {
      this.agifyService.getAge(this.userName).subscribe((data: any) => { 
        this.searchedName = data.name;
        this.cdr.detectChanges();
      });
    }
  }
}