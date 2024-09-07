import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelRegistrationComponent } from './cancel-registration/cancel-registration.component';
import { CancellationRoutingModule } from './cancellation-routing.module';



@NgModule({
  declarations: [
    CancelRegistrationComponent
  ],
  imports: [
    CommonModule,
    CancellationRoutingModule
  ]
})
export class CancellationModule { }
