import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
// import { PasswordequalvalidatorDirective } from './passwordequalvalidator.directive';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  // declarations: [PasswordequalvalidatorDirective]
})
export class AuthenticationModule { }
