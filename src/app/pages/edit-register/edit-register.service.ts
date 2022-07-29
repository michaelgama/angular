import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Register } from 'src/app/model/register';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root',
})
export class EditRegisterService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/register`;

  constructor(private http: HttpClient) {}

  editRegister(id: number): Observable<Response<Register>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Register>>(url);
  }

  updateRegister(id: number, register: Register): Observable<Register> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Register>(url, register);
  }
}
