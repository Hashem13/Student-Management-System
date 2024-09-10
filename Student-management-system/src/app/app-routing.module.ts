import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'register', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'cancel', loadChildren: () => import('./cancellation/cancellation.module').then(m => m.CancellationModule) },
  { path: 'user-dashboard', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
