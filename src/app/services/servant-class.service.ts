import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServantClassService {
  private apiUrl = 'http://localhost:8080/api/servants/class';

  constructor(private http: HttpClient) {}

  getSaber(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Saber`);
  }

  getArcher(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Archer`);
  }

  getLancer(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Lancer`);
  }

  getRider(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Rider`);
  }

  getCaster(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Caster`);
  }

  getAssassin(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Assassin`);
  }

  getBerserker(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Berserker`);
  }

  getRuler(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Ruler`);
  }
}
