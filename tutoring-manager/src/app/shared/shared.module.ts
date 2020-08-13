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
import { TranslatePipe } from './translate-pipe.pipe';

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
    TranslatePipe
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
    TranslatePipe
  ]
})
export class SharedModule { }