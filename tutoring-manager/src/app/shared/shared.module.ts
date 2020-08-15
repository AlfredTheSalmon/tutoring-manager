import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { DirectNavigationComponent } from './direct-navigation/direct-navigation.component';
import { FunctionsComponent } from './functions/functions.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TutoringLessonComponent } from './tutoring-lesson/tutoring-lesson.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { MessagesComponent } from './messages/messages.component';
import { TranslatePipe } from './pipes/translate-pipe.pipe';
import { FormatStringPipe } from './pipes/format-string.pipe';
import { LetterListComponent } from './letter-list/letter-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DirectNavigationComponent,
    FunctionsComponent,
    FooterComponent,
    TutoringLessonComponent,
    ProfessorComponent,
    StudentComponent,
    MessagesComponent,
    TranslatePipe,
    FormatStringPipe,
    LetterListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    DirectNavigationComponent,
    FunctionsComponent,
    FooterComponent,
    TutoringLessonComponent,
    ProfessorComponent,
    StudentComponent,
    MessagesComponent,
    TranslatePipe,
    FormatStringPipe,
    LetterListComponent
  ]
})
export class SharedModule { }