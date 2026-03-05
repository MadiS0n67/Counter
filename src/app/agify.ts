import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgifyService {
  constructor(private http: HttpClient) { }

  getAge(name: string): Observable<any> {
    return this.http.get(`https://api.agify.io/?name=${name}`);
  }

}
