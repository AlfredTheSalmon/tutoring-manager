import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { StudentInfo } from '../models/student-info.model';
import { ProfessorInfo, ProfessorNote } from '../models/professor-info.model';
import { StudentListSearchQuery } from 'src/app/shared/models/student-list-search-query.model';
import { UserList } from 'src/app/shared/models/user-list.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getProfessorURL = environment.API_URL + 'api/person/professor';
  private getProfessorNotesURL = environment.API_URL + 'api/person/professor/notes';
  private getStudentURL = environment.API_URL + 'api/person/student';
  private getStudentListURL = environment.API_URL + 'api/person/student-list';

  private professorInfoCached: ProfessorInfo;

  constructor(private http: HttpClient) { }

  getProfessor(payload: string, useCached?: boolean): Observable<ProfessorInfo> {
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

  getStudentList(payload: StudentListSearchQuery): Observable<UserList> {
    return this.http.post<void>(this.getStudentListURL, payload, httpOptions).pipe(
      tap((response: any) => console.log('get student list ok response:', response),
        (response: any) => console.log('get student list error response:', response))
    );
  }

  getProfessorNoteList(payload: string): Observable<ProfessorNote[]> {
    return this.http.post<void>(this.getProfessorNotesURL, payload, httpOptions).pipe(
      tap((response: any) => console.log('get professor notes ok response:', response),
        (response: any) => console.log('get professor notes error response:', response))
    );
  }


  

}