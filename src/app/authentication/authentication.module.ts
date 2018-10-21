import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
// import { PasswordequalvalidatorDirective } from './passwordequalvalidator.directive';

import { MatFormFieldModule , MatInputModule , MatCardModule , MatButtonModule} from '@angular/material';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule ,
    MatFormFieldModule ,
    MatCardModule ,
    MatInputModule ,
    FormsModule ,
    ReactiveFormsModule ,
    MatButtonModule
  ],
  declarations: [LoginComponent],
  // declarations: [PasswordequalvalidatorDirective]
})
export class AuthenticationModule { }
