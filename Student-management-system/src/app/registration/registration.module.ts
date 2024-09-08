import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule
  ]
})
export class RegistrationModule { }
