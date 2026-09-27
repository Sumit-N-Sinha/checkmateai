import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  register(name:string,email:string,password:string): any {
    return this.http.post<any>(`${this.apiUrl}/v1/register`,{name,email,password});
  }
}
