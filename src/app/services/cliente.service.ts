import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl: string = 'https://localhost:7027/';
  private myApiUrl: string = 'api/cliente/'
  
  constructor(private http: HttpClient) { }

  getClientes(): Observable<cliente[]> {
    return this.http.get<cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
