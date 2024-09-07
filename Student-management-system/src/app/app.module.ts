import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CourseListComponent,
    RegisterFormComponent,
    ScheduleListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
