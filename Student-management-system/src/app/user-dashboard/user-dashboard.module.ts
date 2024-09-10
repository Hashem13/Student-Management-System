import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    HttpClientModule // Import HttpClientModule if needed for data fetching
  ]
})
export class UserDashboardModule { }
