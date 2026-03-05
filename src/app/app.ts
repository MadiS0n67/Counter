import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }
}