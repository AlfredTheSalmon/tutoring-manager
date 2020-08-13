import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private getProfessorURL = environment.API_URL + 'api/person/professor';

  constructor(private http: HttpClient) { }

  getProfessor(payload: number): Observable<ProfessorInfo> {
    const url = `${this.getProfessorURL}/${payload}`;
    return this.http.post<void>(url, httpOptions).pipe(
      tap((response: any) => console.log('get professor ok response:', response),
        (response: any) => console.log('get professor error response:', response))
    );
  }

}