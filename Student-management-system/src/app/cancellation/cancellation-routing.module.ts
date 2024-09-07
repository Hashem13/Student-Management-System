import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelRegistrationComponent } from './cancel-registration/cancel-registration.component';

const routes: Routes = [
  { path: '', component: CancelRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancellationRoutingModule { }
