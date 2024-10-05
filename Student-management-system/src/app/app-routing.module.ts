import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/login-form/auth.guard'; // Path to your guard

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path: 'courses',loadChildren: () =>import('./courses/courses.module').then((m) => m.CoursesModule),canActivate: [AuthGuard]}, // Protect the route}, // Protect the route,
  { path: 'register', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule),canActivate: [AuthGuard] },
  { path: 'cancel', loadChildren: () => import('./cancellation/cancellation.module').then(m => m.CancellationModule) },
  { path: 'user-dashboard', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
