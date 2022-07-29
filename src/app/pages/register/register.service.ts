import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from 'src/app/model/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/register`;

  constructor(private http: HttpClient) {}

  registerClient(register: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl, register);
  }
}
