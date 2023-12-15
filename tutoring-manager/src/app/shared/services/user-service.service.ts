import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { StudentInfo } from '../models/student-info.model';
import { ProfessorInfo, ProfessorNote } from '../models/professor-info.model';
import { StudentListSearchQuery } from 'src/app/shared/models/student-list-search-query.model';
import { UserList } from 'src/app/shared/models/user-list.model';
import { UserStatus } from '../enum/user-status.enum';

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

  getProfessorMock(): ProfessorInfo {
    let professorInfo = new ProfessorInfo;
    professorInfo.id = "123";
    professorInfo.age = 12;
    professorInfo.name = "Manuel";
    professorInfo.fullName = "Manuel Rodrigues de Carvalho";
    professorInfo.gender = 1;
    professorInfo.teachedSubjects = "9th";
    professorInfo.lastLesson = "30 February 2020";
    professorInfo.joinedTs = "1 January 2020";
    professorInfo.email = "nothing@gmail.com";
    professorInfo.status = UserStatus.ACTIVE;
    professorInfo.address = "address 1";
    professorInfo.phone = 123456789;
    professorInfo.iban = "PT50123456789123456789";
    
    return professorInfo;
  }

  getProfessorNoteListMock(): ProfessorNote[] {
    let professorNotes: ProfessorNote[] = undefined;

    let note1 = new ProfessorNote;
    note1.noteTitle = "Dário's mom number";
    note1.noteBody = "+351 123456789";
    
    let note2 = new ProfessorNote;
    note2.noteTitle = "Bring for Mathilda's next lesson";
    note2.noteBody = "Math book XYZ from 8º grade.";
    
    let note3 = new ProfessorNote;
    note3.noteTitle = "Reschedule";
    note3.noteBody = "Ask for a reschedule of the lessons 2 weeks from now on day 18.";

    professorNotes = [note1, note2, note3];

    return professorNotes;
  }
  

}