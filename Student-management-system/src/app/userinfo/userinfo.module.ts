// userinfo.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './user-details/user-details.component';
import { UserinfoRoutingModule } from './userinfo-routing.module';

@NgModule({
  declarations: [
    UserinfoComponent
  ],
  imports: [
    CommonModule,
    UserinfoRoutingModule
  ]
})
export class UserinfoModule { }
