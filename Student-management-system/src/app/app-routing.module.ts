import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'registration', component: RegisterFormComponent },
  { path: 'schedule', component: ScheduleListComponent },
  // Add other routes or wildcard route here if necessary
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
