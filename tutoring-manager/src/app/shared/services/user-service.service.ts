import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { StudentInfo } from '../student/student-info.model';
import { ProfessorInfo } from '../professor/professor-info.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getProfessorURL = environment.API_URL + 'api/person/professor';
  private getStudentURL = environment.API_URL + 'api/person/student';

  constructor(private http: HttpClient) { }

  getProfessor(payload: string): Observable<ProfessorInfo> {
    const url = `${this.getProfessorURL}/${payload}`;
    return this.http.post<void>(url, httpOptions).pipe(
      tap((response: any) => console.log('get professor ok response:', response),
        (response: any) => console.log('get professor error response:', response))
    );
  }

  getStudent(payload: string): Observable<StudentInfo> {
    const url = `${this.getStudentURL}/${payload}`;
    return this.http.post<void>(url, httpOptions).pipe(
      tap((response: any) => console.log('get student ok response:', response),
        (response: any) => console.log('get student error response:', response))
    );
  }

}