
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgifyService {
  constructor(private http: HttpClient) {}

  getAge(name: string) {
    
    return this.http.get<any>(`https://api.agify.io/?name=${name}`);
  }
}