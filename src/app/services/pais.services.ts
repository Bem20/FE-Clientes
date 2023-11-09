import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private myAppUrl: string = 'https://localhost:7027/';
  private myApiUrl: string = 'api/pais/'
  
  constructor(private http: HttpClient) { }

  getPais(): Observable<pais[]> {
    return this.http.get<pais[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}