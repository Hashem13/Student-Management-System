import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { RegisterFormComponent } from '../registration/register-form/register-form.component';
import { UserinfoComponent } from '../userinfo/user-details/user-details.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'register/:id', component: RegisterFormComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
