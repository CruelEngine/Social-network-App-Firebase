import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
// import { PasswordequalvalidatorDirective } from './passwordequalvalidator.directive';

import { MatFormFieldModule , MatInputModule , MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule , MatFormFieldModule , MatCardModule , MatInputModule
  ],
  declarations: [LoginComponent],
  // declarations: [PasswordequalvalidatorDirective]
})
export class AuthenticationModule { }
