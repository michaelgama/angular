import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from 'src/app/model/register';

@Injectable({
  providedIn: 'root',
})
export class RegistersService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/register`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Register[]> {
    return this.http
      .get(this.apiUrl)
      .pipe(catchError(this.handleError), map(this.jsonDataToRegister));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url);
  }

  //PRIVATE METHODS

  private jsonDataToRegister(jsonData: any[]): Register[] {
    const registers: Register[] = [];
    jsonData.forEach((element) => registers.push(element as Register));
    return registers;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO =>', error);
    return throwError(error);
  }
}
