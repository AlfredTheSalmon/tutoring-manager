
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './shared/student/student.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'students',
    component: MainComponent,
    children: [
      { path: '', component: StudentListComponent }
    ]
  },
  {
    path: 'student',
    component: MainComponent,
    children: [
      { path: ':id', component: StudentComponent }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }